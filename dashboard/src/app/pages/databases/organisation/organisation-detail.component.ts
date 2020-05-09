import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from '@angular/router'
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { first } from 'rxjs/operators';

import { Organisation } from '../../../models/organisation.model';
import { OrganisationService } from '../../../services/organisation.service';

@Component({
  selector: "app-database-organisation-detail",
  templateUrl: "organisation-detail.component.html"
})
export class OrganisationDetailComponent implements OnInit {
  
  organisation: Organisation;
  _id: string;

  organisationForm: any = {};
  loading = false;
  submitted = false;  

  constructor(        
    public route: ActivatedRoute,
    public router: Router,
    private organisationService: OrganisationService) {
  }



  ngOnInit() {

    this._id = this.route.snapshot.params['id'];
    this.organisation = this.organisationService.organisation;

    if (!this.organisation) {
      this.getSpecificOrganisation(this._id)
    } else {
      this.organisationForm = this.organisation;
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

  getSpecificOrganisation(_id) {
    this.organisationService.getOrganisation(_id).subscribe(
      (data) => {
        this.organisation = data
      }, (error) => {

      }, () => {

      }
    )
  }

  onSubmit() {
    console.log(this.organisationForm);

    const formData = new FormData();
    formData.append('name', this.organisationForm.name);  
    formData.append('label', this.organisationForm.label);    

    this.organisationService.updateOrganisation(this._id,this.organisationForm).subscribe(
      (data: any) => {
        console.log(data);
        this.organisationService.organisation = data;
        this.organisation = this.organisationService.organisation;
      },
      (error) => {
        console.log(error);
      },
      () => {
        this.router.navigateByUrl('/databases/organisation')
      }
    )        
  }




}
