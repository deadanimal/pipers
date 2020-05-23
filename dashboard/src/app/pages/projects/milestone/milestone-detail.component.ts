import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from '@angular/router'
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { first } from 'rxjs/operators';

import { Milestone } from '../../../models/milestone.model';
import { MilestoneService } from '../../../services/milestone.service';

@Component({
  selector: "app-project-milestone-detail",
  templateUrl: "milestone-detail.component.html"
})
export class MilestoneDetailComponent implements OnInit {
  
  milestone: Milestone;
  _id: string;

  milestoneForm: any = {};
  loading = false;
  submitted = false;  

  constructor(        
    public route: ActivatedRoute,
    public router: Router,
    private milestoneService: MilestoneService) {
  }



  ngOnInit() {

    this._id = this.route.snapshot.params['id'];
    this.milestone = this.milestoneService.milestone;

    if (!this.milestone) {
      this.getSpecificMilestone(this._id)
    } else {
      this.milestoneForm = this.milestone;
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

  getSpecificMilestone(_id) {
    this.milestoneService.getMilestone(_id).subscribe(
      (data) => {
        this.milestone = data
      }, (error) => {

      }, () => {

      }
    )
  }

  onSubmit() {
    console.log(this.milestoneForm);

    const formData = new FormData();
    formData.append('name', this.milestoneForm.name);  
    formData.append('label', this.milestoneForm.label);    

    this.milestoneService.updateMilestone(this._id,this.milestoneForm).subscribe(
      (data: any) => {
        console.log(data);
        this.milestoneService.milestone = data;
        this.milestone = this.milestoneService.milestone;
      },
      (error) => {
        console.log(error);
      },
      () => {
        this.router.navigateByUrl('/projects/milestone')
      }
    )        
  }




}
