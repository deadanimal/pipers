import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from '@angular/router'
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { first } from 'rxjs/operators';

import { Wireframe } from '../../../models/wireframe.model';
import { WireframeService } from '../../../services/wireframe.service';

@Component({
  selector: "app-project-wireframe-detail",
  templateUrl: "wireframe-detail.component.html"
})
export class WireframeDetailComponent implements OnInit {
  
  wireframe: Wireframe;
  _id: string;

  wireframeForm: any = {};
  loading = false;
  submitted = false;  

  constructor(        
    public route: ActivatedRoute,
    public router: Router,
    private wireframeService: WireframeService) {
  }



  ngOnInit() {

    this._id = this.route.snapshot.params['id'];
    this.wireframe = this.wireframeService.wireframe;

    if (!this.wireframe) {
      this.getSpecificWireframe(this._id)
    } else {
      this.wireframeForm = this.wireframe;
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

  getSpecificWireframe(_id) {
    this.wireframeService.getWireframe(_id).subscribe(
      (data) => {
        this.wireframe = data
      }, (error) => {

      }, () => {

      }
    )
  }

  onSubmit() {
    console.log(this.wireframeForm);

    const formData = new FormData();
    formData.append('name', this.wireframeForm.name);  
    formData.append('label', this.wireframeForm.label);    

    this.wireframeService.updateWireframe(this._id,this.wireframeForm).subscribe(
      (data: any) => {
        console.log(data);
        this.wireframeService.wireframe = data;
        this.wireframe = this.wireframeService.wireframe;
      },
      (error) => {
        console.log(error);
      },
      () => {
        this.router.navigateByUrl('/tenders/wireframe')
      }
    )        
  }




}
