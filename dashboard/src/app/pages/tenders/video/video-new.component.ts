import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router'
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { first } from 'rxjs/operators';

import { Video } from '../../../models/video.model';
import { VideoService } from '../../../services/video.service';

@Component({
  selector: "app-project-video-new",
  templateUrl: "video-new.component.html"
})
export class VideoNewComponent implements OnInit {
  
  videos: Video[];
  
  videoForm: any = {};
  loading = false;
  submitted = false;  



  constructor(        
    public router: Router,
    private videoService: VideoService) {
 
  }


  ngOnInit() {

    var navbar = document.getElementsByClassName("navbar-top")[0];
    navbar.classList.add("bg-secondary");
    navbar.classList.add("navbar-light");
    navbar.classList.remove("bg-danger");
    navbar.classList.remove("navbar-dark");

    var navbarSearch = document.getElementsByClassName("navbar-search")[0];
    navbarSearch.classList.add("navbar-search-dark");
    navbarSearch.classList.remove("navbar-search-light");    
      
  }

  ngOnDestroy() {
    var navbar = document.getElementsByClassName("navbar-top")[0];
    navbar.classList.remove("bg-secondary");
    navbar.classList.remove("navbar-light");
    navbar.classList.add("bg-danger");
    navbar.classList.add("navbar-dark");

    var navbarSearch = document.getElementsByClassName("navbar-search")[0];
    navbarSearch.classList.remove("navbar-search-dark");
    navbarSearch.classList.add("navbar-search-light");
  }  


  onSubmit() {
    console.log(this.videoForm);

    const formData = new FormData();
    formData.append('name', this.videoForm.name);  
    formData.append('label', this.videoForm.label);    

    this.videoService.newVideo(this.videoForm).subscribe(
      (data: any) => {
        console.log(data);
      },
      (error) => {
        console.log(error);
      },
      () => {
        this.router.navigateByUrl('/tenders/video')
      }
    )        
  }



}
