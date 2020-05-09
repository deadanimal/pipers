import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from '@angular/router'
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { first } from 'rxjs/operators';

import { Goal } from '../../../models/goal.model';
import { GoalService } from '../../../services/goal.service';

@Component({
  selector: "app-database-goal-detail",
  templateUrl: "goal-detail.component.html"
})
export class GoalDetailComponent implements OnInit {
  
  goal: Goal;
  _id: string;

  goalForm: any = {};
  loading = false;
  submitted = false;  

  constructor(        
    public route: ActivatedRoute,
    public router: Router,
    private goalService: GoalService) {
  }



  ngOnInit() {

    this._id = this.route.snapshot.params['id'];
    this.goal = this.goalService.goal;

    if (!this.goal) {
      this.getSpecificGoal(this._id)
    } else {
      this.goalForm = this.goal;
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

  getSpecificGoal(_id) {
    this.goalService.getGoal(_id).subscribe(
      (data) => {
        this.goal = data
      }, (error) => {

      }, () => {

      }
    )
  }

  onSubmit() {
    console.log(this.goalForm);

    const formData = new FormData();
    formData.append('name', this.goalForm.name);  
    formData.append('label', this.goalForm.label);    

    this.goalService.updateGoal(this._id,this.goalForm).subscribe(
      (data: any) => {
        console.log(data);
        this.goalService.goal = data;
        this.goal = this.goalService.goal;
      },
      (error) => {
        console.log(error);
      },
      () => {
        this.router.navigateByUrl('/databases/goal')
      }
    )        
  }




}
