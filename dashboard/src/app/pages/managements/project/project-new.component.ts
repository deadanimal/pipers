import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router'
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { first } from 'rxjs/operators';

import { Project } from '../../../models/project.model';
import { ProjectService } from '../../../services/project.service';
import { OrganisationService } from 'src/app/services/organisation.service';

@Component({
  selector: "app-project-project-new",
  templateUrl: "project-new.component.html"
})
export class ProjectNewComponent implements OnInit {
  
  projects: Project[];
  
  projectForm: any = {};
  loading = false;
  submitted = false;  

  organisations;

  constructor(        
    public router: Router,
    private projectService: ProjectService,
    private organisationService: OrganisationService) {
 
  }


  ngOnInit() {

    this.organisations = this.organisationService.organisations;

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
    console.log(this.projectForm);

    const formData = new FormData();
    formData.append('name', this.projectForm.name);  
    formData.append('short_name', this.projectForm.short_name);    

    this.projectService.newProject(this.projectForm).subscribe(
      (data: any) => {
        console.log(data);
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
