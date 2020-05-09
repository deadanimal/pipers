import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from '@angular/router'
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { first } from 'rxjs/operators';

import { Gateway } from '../../../models/gateway.model';
import { GatewayService } from '../../../services/gateway.service';

@Component({
  selector: "app-database-gateway-detail",
  templateUrl: "gateway-detail.component.html"
})
export class GatewayDetailComponent implements OnInit {
  
  gateway: Gateway;
  _id: string;

  gatewayForm: any = {};
  loading = false;
  submitted = false;  

  constructor(        
    public route: ActivatedRoute,
    public router: Router,
    private gatewayService: GatewayService) {
  }



  ngOnInit() {

    this._id = this.route.snapshot.params['id'];
    this.gateway = this.gatewayService.gateway;

    if (!this.gateway) {
      this.getSpecificGateway(this._id)
    } else {
      this.gatewayForm = this.gateway;
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

  getSpecificGateway(_id) {
    this.gatewayService.getGateway(_id).subscribe(
      (data) => {
        this.gateway = data
      }, (error) => {

      }, () => {

      }
    )
  }

  onSubmit() {
    console.log(this.gatewayForm);

    const formData = new FormData();
    formData.append('name', this.gatewayForm.name);  
    formData.append('label', this.gatewayForm.label);    

    this.gatewayService.updateGateway(this._id,this.gatewayForm).subscribe(
      (data: any) => {
        console.log(data);
        this.gatewayService.gateway = data;
        this.gateway = this.gatewayService.gateway;
      },
      (error) => {
        console.log(error);
      },
      () => {
        this.router.navigateByUrl('/databases/gateway')
      }
    )        
  }




}
