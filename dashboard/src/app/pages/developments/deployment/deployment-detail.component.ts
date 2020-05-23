import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from '@angular/router'
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { first } from 'rxjs/operators';

import { Deployment } from '../../../models/deployment.model';
import { DeploymentService } from '../../../services/deployment.service';

@Component({
  selector: "app-project-deployment-detail",
  templateUrl: "deployment-detail.component.html"
})
export class DeploymentDetailComponent implements OnInit {
  
  deployment: Deployment;
  _id: string;

  deploymentForm: any = {};
  loading = false;
  submitted = false;  

  constructor(        
    public route: ActivatedRoute,
    public router: Router,
    private deploymentService: DeploymentService) {
  }



  ngOnInit() {

    this._id = this.route.snapshot.params['id'];
    this.deployment = this.deploymentService.deployment;

    if (!this.deployment) {
      this.getSpecificDeployment(this._id)
    } else {
      this.deploymentForm = this.deployment;
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

  getSpecificDeployment(_id) {
    this.deploymentService.getDeployment(_id).subscribe(
      (data) => {
        this.deployment = data
      }, (error) => {

      }, () => {

      }
    )
  }

  onSubmit() {
    console.log(this.deploymentForm);

    const formData = new FormData();
    formData.append('name', this.deploymentForm.name);  
    formData.append('label', this.deploymentForm.label);    

    this.deploymentService.updateDeployment(this._id,this.deploymentForm).subscribe(
      (data: any) => {
        console.log(data);
        this.deploymentService.deployment = data;
        this.deployment = this.deploymentService.deployment;
      },
      (error) => {
        console.log(error);
      },
      () => {
        this.router.navigateByUrl('/developments/deployment')
      }
    )        
  }




}
