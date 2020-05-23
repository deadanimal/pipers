import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from '@angular/router'
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { first } from 'rxjs/operators';

import { Submission } from '../../../models/submission.model';
import { SubmissionService } from '../../../services/submission.service';

@Component({
  selector: "app-project-submission-detail",
  templateUrl: "submission-detail.component.html"
})
export class SubmissionDetailComponent implements OnInit {
  
  submission: Submission;
  _id: string;

  submissionForm: any = {};
  loading = false;
  submitted = false;  

  constructor(        
    public route: ActivatedRoute,
    public router: Router,
    private submissionService: SubmissionService) {
  }



  ngOnInit() {

    this._id = this.route.snapshot.params['id'];
    this.submission = this.submissionService.submission;

    if (!this.submission) {
      this.getSpecificSubmission(this._id)
    } else {
      this.submissionForm = this.submission;
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

  getSpecificSubmission(_id) {
    this.submissionService.getSubmission(_id).subscribe(
      (data) => {
        this.submission = data
      }, (error) => {

      }, () => {

      }
    )
  }

  onSubmit() {
    console.log(this.submissionForm);

    const formData = new FormData();
    formData.append('name', this.submissionForm.name);  
    formData.append('label', this.submissionForm.label);    

    this.submissionService.updateSubmission(this._id,this.submissionForm).subscribe(
      (data: any) => {
        console.log(data);
        this.submissionService.submission = data;
        this.submission = this.submissionService.submission;
      },
      (error) => {
        console.log(error);
      },
      () => {
        this.router.navigateByUrl('/tenders/submission')
      }
    )        
  }




}
