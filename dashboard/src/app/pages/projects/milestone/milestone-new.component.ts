import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router'
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { first } from 'rxjs/operators';

import { Milestone } from '../../../models/milestone.model';
import { MilestoneService } from '../../../services/milestone.service';

@Component({
  selector: "app-project-milestone-new",
  templateUrl: "milestone-new.component.html"
})
export class MilestoneNewComponent implements OnInit {
  
  milestones: Milestone[];
  
  milestoneForm: any = {};
  loading = false;
  submitted = false;  



  constructor(        
    public router: Router,
    private milestoneService: MilestoneService) {
 
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
    console.log(this.milestoneForm);

    const formData = new FormData();
    formData.append('name', this.milestoneForm.name);  
    formData.append('label', this.milestoneForm.label);    

    this.milestoneService.newMilestone(this.milestoneForm).subscribe(
      (data: any) => {
        console.log(data);
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
