import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router'
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { first } from 'rxjs/operators';

import { Document } from '../../../models/document.model';
import { DocumentService } from '../../../services/document.service';
import { OrganisationService } from 'src/app/services/organisation.service';
import { ProjectService } from 'src/app/services/project.service';
import { SubmissionService } from 'src/app/services/submission.service';

@Component({
  selector: "app-project-document-list",
  templateUrl: "document-list.component.html"
})
export class DocumentListComponent implements OnInit {
  
  documents: Document[];
  
  documentForm: any = {};
  loading = false;
  submitted = false;  

  organisations;
  projects;
  submissions;

  constructor(        
    public router: Router,
    private documentService: DocumentService,
    private organisationService: OrganisationService,
    private projectService: ProjectService,
    private submissionService: SubmissionService) {
 
  }


  ngOnInit() {

    this.organisations = this.organisationService.organisations;
    this.projects = this.projectService.projects;
    this.submissions = this.submissionService.submissions;

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





}
