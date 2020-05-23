import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router'
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { first } from 'rxjs/operators';

import { Maintenance } from '../../../models/maintenance.model';
import { MaintenanceService } from '../../../services/maintenance.service';
import { OrganisationService } from 'src/app/services/organisation.service';
import { ProjectService } from 'src/app/services/project.service';
import { SubmissionService } from 'src/app/services/submission.service';

@Component({
  selector: "app-project-maintenance-new",
  templateUrl: "maintenance-new.component.html"
})
export class MaintenanceNewComponent implements OnInit {
  
  maintenances: Maintenance[];
  
  maintenanceForm: any = {};
  loading = false;
  submitted = false;  

  organisations; projects; submissions;

  constructor(        
    public router: Router,
    private maintenanceService: MaintenanceService,
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


  onSubmit() {
    console.log(this.maintenanceForm);

    const formData = new FormData();
    formData.append('name', this.maintenanceForm.name);  
    formData.append('label', this.maintenanceForm.label);    

    this.maintenanceService.newMaintenance(this.maintenanceForm).subscribe(
      (data: any) => {
        console.log(data);
      },
      (error) => {
        console.log(error);
      },
      () => {
        this.router.navigateByUrl('/developments/maintenance')
      }
    )        
  }



}
