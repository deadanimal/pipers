import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from '@angular/router'
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { first } from 'rxjs/operators';

import { Project } from '../../../models/project.model';
import { ProjectService } from '../../../services/project.service';

@Component({
  selector: "app-project-project-detail",
  templateUrl: "project-detail.component.html"
})
export class ProjectDetailComponent implements OnInit {
  
  project: Project;
  _id: string;

  projectForm: any = {};
  loading = false;
  submitted = false;  

  constructor(        
    public route: ActivatedRoute,
    public router: Router,
    private projectService: ProjectService) {
  }



  ngOnInit() {

    this._id = this.route.snapshot.params['id'];
    this.project = this.projectService.project;

    if (!this.project) {
      this.getSpecificProject(this._id)
    } else {
      this.projectForm = this.project;
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

  getSpecificProject(_id) {
    this.projectService.getProject(_id).subscribe(
      (data) => {
        this.project = data
      }, (error) => {

      }, () => {

      }
    )
  }

  onSubmit() {
    console.log(this.projectForm);

    const formData = new FormData();
    formData.append('name', this.projectForm.name);  
    formData.append('short_name', this.projectForm.short_name);    

    this.projectService.updateProject(this._id,this.projectForm).subscribe(
      (data: any) => {
        console.log(data);
        this.projectService.project = data;
        this.project = this.projectService.project;
      },
      (error) => {
        console.log(error);
      },
      () => {
        this.router.navigateByUrl('/managements/project')
      }
    )        
  }




}
