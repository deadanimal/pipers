import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from '@angular/router'
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { first } from 'rxjs/operators';

import { Flow } from '../../../models/flow.model';
import { FlowService } from '../../../services/flow.service';

@Component({
  selector: "app-project-flow-detail",
  templateUrl: "flow-detail.component.html"
})
export class FlowDetailComponent implements OnInit {
  
  flow: Flow;
  _id: string;

  flowForm: any = {};
  loading = false;
  submitted = false;  

  constructor(        
    public route: ActivatedRoute,
    public router: Router,
    private flowService: FlowService) {
  }



  ngOnInit() {

    this._id = this.route.snapshot.params['id'];
    this.flow = this.flowService.flow;

    if (!this.flow) {
      this.getSpecificFlow(this._id)
    } else {
      this.flowForm = this.flow;
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

  getSpecificFlow(_id) {
    this.flowService.getFlow(_id).subscribe(
      (data) => {
        this.flow = data
      }, (error) => {

      }, () => {

      }
    )
  }

  onSubmit() {
    console.log(this.flowForm);

    const formData = new FormData();
    formData.append('name', this.flowForm.name);  
    formData.append('label', this.flowForm.label);    

    this.flowService.updateFlow(this._id,this.flowForm).subscribe(
      (data: any) => {
        console.log(data);
        this.flowService.flow = data;
        this.flow = this.flowService.flow;
      },
      (error) => {
        console.log(error);
      },
      () => {
        this.router.navigateByUrl('/developments/flow')
      }
    )        
  }




}
