import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from '@angular/router'
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { first } from 'rxjs/operators';

import { Training } from '../../../models/training.model';
import { TrainingService } from '../../../services/training.service';

@Component({
  selector: "app-project-training-detail",
  templateUrl: "training-detail.component.html"
})
export class TrainingDetailComponent implements OnInit {
  
  training: Training;
  _id: string;

  trainingForm: any = {};
  loading = false;
  submitted = false;  

  constructor(        
    public route: ActivatedRoute,
    public router: Router,
    private trainingService: TrainingService) {
  }



  ngOnInit() {

    this._id = this.route.snapshot.params['id'];
    this.training = this.trainingService.training;

    if (!this.training) {
      this.getSpecificTraining(this._id)
    } else {
      this.trainingForm = this.training;
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

  getSpecificTraining(_id) {
    this.trainingService.getTraining(_id).subscribe(
      (data) => {
        this.training = data
      }, (error) => {

      }, () => {

      }
    )
  }

  onSubmit() {
    console.log(this.trainingForm);

    const formData = new FormData();
    formData.append('name', this.trainingForm.name);  
    formData.append('label', this.trainingForm.label);    

    this.trainingService.updateTraining(this._id,this.trainingForm).subscribe(
      (data: any) => {
        console.log(data);
        this.trainingService.training = data;
        this.training = this.trainingService.training;
      },
      (error) => {
        console.log(error);
      },
      () => {
        this.router.navigateByUrl('/projects/training')
      }
    )        
  }




}
