import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router'
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { first } from 'rxjs/operators';

export enum SelectionType {
  single = "single",
  multi = "multi",
  multiClick = "multiClick",
  cell = "cell",
  checkbox = "checkbox"
}

import { Maintenance } from '../../../models/maintenance.model';
import { MaintenanceService } from '../../../services/maintenance.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { ProjectService } from 'src/app/services/project.service';
import { OrganisationService } from 'src/app/services/organisation.service';
import { SubmissionService } from 'src/app/services/submission.service';

@Component({
  selector: "app-project-maintenance",
  templateUrl: "maintenance.component.html"
})
export class MaintenanceComponent implements OnInit {
  
  maintenances: Maintenance[];

  entries: number = 10;
  selected: any[] = [];
  temp = [];
  activeRow: any;
  rows: any = []
  SelectionType = SelectionType;

  organisations;
  projects;
  submissions;

  constructor(        
    public router: Router,
    private spinner: NgxSpinnerService,
    private maintenanceService: MaintenanceService,
    private organisationService: OrganisationService,
    private projectService: ProjectService,
    private submissionService: SubmissionService) {    
   

      this.temp = this.rows.map((prop, key) => {
        return {
          ...prop,
          id: key
        };
      });

  }

  entriesChange($event) {
    this.entries = $event.target.value;
  }
  filterTable($event) {
    let val = $event.target.value;
    this.temp = this.rows.filter(function(d) {
      for (var key in d) {
        if (d[key].toLowerCase().indexOf(val) !== -1) {
          return true;
        }
      }
      return false;
    });
  }
  onSelect({ selected }) {
    this.selected.splice(0, this.selected.length);
    this.selected.push(...selected);
    
    this.moveTo(selected[0]['id']);

  }
  onActivate(event) {
    this.activeRow = event.row;
    
  }

  ngOnInit() {
    this.getAllMaintenances();

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

  getAllMaintenances() {
    
    this.spinner.show();

    this.maintenanceService.getMaintenances().subscribe(
      (data) => {
        this.maintenanceService.maintenances = data;
      },
      (error) => {
        console.log(error);
        this.spinner.hide();
      },
      () => {
        this.maintenances = this.maintenanceService.maintenances;
        this.temp = this.maintenances;
        this.spinner.hide();
      }
    )   

  }

  moveTo(link) {

    if (link == 'new') {
      this.router.navigateByUrl('/developments/maintenance/new')
    } else {

      this.maintenanceService.maintenance = this.maintenanceService.maintenances.find(element => element.id == link)

      let url_string = '/developments/maintenance/' + link
      this.router.navigateByUrl(url_string)
    }

  }

}
