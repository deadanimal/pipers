import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from '@angular/router'
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { first } from 'rxjs/operators';

import { Appliance } from '../../../models/appliance.model';
import { ApplianceService } from '../../../services/appliance.service';

@Component({
  selector: "app-database-appliance-detail",
  templateUrl: "appliance-detail.component.html"
})
export class ApplianceDetailComponent implements OnInit {
  
  appliance: Appliance;
  _id: string;

  accountForm: any = {};
  loading = false;
  submitted = false;  

  constructor(        
    public route: ActivatedRoute,
    public router: Router,
    private applianceService: ApplianceService) {
  }



  ngOnInit() {

    this._id = this.route.snapshot.params['id'];
    this.appliance = this.applianceService.appliance;

    if (!this.appliance) {
      this.getSpecificAppliance(this._id)
    } else {
      this.accountForm = this.appliance;
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

  getSpecificAppliance(_id) {
    this.applianceService.getAppliance(_id).subscribe(
      (data) => {
        this.appliance = data
      }, (error) => {

      }, () => {

      }
    )
  }

  onSubmit() {
    console.log(this.accountForm);

    const formData = new FormData();
    formData.append('name', this.accountForm.name);  
    formData.append('label', this.accountForm.label);    

    this.applianceService.updateAppliance(this._id,this.accountForm).subscribe(
      (data: any) => {
        console.log(data);
        this.applianceService.appliance = data;
        this.appliance = this.applianceService.appliance;
      },
      (error) => {
        console.log(error);
      },
      () => {
        this.router.navigateByUrl('/databases/appliance')
      }
    )        
  }




}
