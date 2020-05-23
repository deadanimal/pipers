import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from '@angular/router'
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { first } from 'rxjs/operators';

import { Commit } from '../../../models/commit.model';
import { CommitService } from '../../../services/commit.service';

@Component({
  selector: "app-project-commit-detail",
  templateUrl: "commit-detail.component.html"
})
export class CommitDetailComponent implements OnInit {
  
  commit: Commit;
  _id: string;

  commitForm: any = {};
  loading = false;
  submitted = false;  

  constructor(        
    public route: ActivatedRoute,
    public router: Router,
    private commitService: CommitService) {
  }



  ngOnInit() {

    this._id = this.route.snapshot.params['id'];
    this.commit = this.commitService.commit;

    if (!this.commit) {
      this.getSpecificCommit(this._id)
    } else {
      this.commitForm = this.commit;
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

  getSpecificCommit(_id) {
    this.commitService.getCommit(_id).subscribe(
      (data) => {
        this.commit = data
      }, (error) => {

      }, () => {

      }
    )
  }

  onSubmit() {
    console.log(this.commitForm);

    const formData = new FormData();
    formData.append('name', this.commitForm.name);  
    formData.append('label', this.commitForm.label);    

    this.commitService.updateCommit(this._id,this.commitForm).subscribe(
      (data: any) => {
        console.log(data);
        this.commitService.commit = data;
        this.commit = this.commitService.commit;
      },
      (error) => {
        console.log(error);
      },
      () => {
        this.router.navigateByUrl('/developments/commit')
      }
    )        
  }




}
