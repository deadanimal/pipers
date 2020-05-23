import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from '@angular/router'
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { first } from 'rxjs/operators';

import { Presentation } from '../../../models/presentation.model';
import { PresentationService } from '../../../services/presentation.service';

@Component({
  selector: "app-project-presentation-detail",
  templateUrl: "presentation-detail.component.html"
})
export class PresentationDetailComponent implements OnInit {
  
  presentation: Presentation;
  _id: string;

  presentationForm: any = {};
  loading = false;
  submitted = false;  

  constructor(        
    public route: ActivatedRoute,
    public router: Router,
    private presentationService: PresentationService) {
  }



  ngOnInit() {

    this._id = this.route.snapshot.params['id'];
    this.presentation = this.presentationService.presentation;

    if (!this.presentation) {
      this.getSpecificPresentation(this._id)
    } else {
      this.presentationForm = this.presentation;
    }

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

  getSpecificPresentation(_id) {
    this.presentationService.getPresentation(_id).subscribe(
      (data) => {
        this.presentation = data
      }, (error) => {

      }, () => {

      }
    )
  }

  onSubmit() {
    console.log(this.presentationForm);

    const formData = new FormData();
    formData.append('name', this.presentationForm.name);  
    formData.append('label', this.presentationForm.label);    

    this.presentationService.updatePresentation(this._id,this.presentationForm).subscribe(
      (data: any) => {
        console.log(data);
        this.presentationService.presentation = data;
        this.presentation = this.presentationService.presentation;
      },
      (error) => {
        console.log(error);
      },
      () => {
        this.router.navigateByUrl('/tenders/presentation')
      }
    )        
  }




}
