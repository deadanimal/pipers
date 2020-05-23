import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router'
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { first } from 'rxjs/operators';
import List from "list.js";


export enum SelectionType {
  single = "single",
  multi = "multi",
  multiClick = "multiClick",
  cell = "cell",
  checkbox = "checkbox"
}

import { OrganisationService } from '../../../services/organisation.service';

import { Submission } from '../../../models/submission.model';
import { SubmissionService } from '../../../services/submission.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: "app-project-submission",
  templateUrl: "submission.component.html"
})
export class SubmissionComponent implements OnInit {
  
  submissions: Submission[];

  entries: number = 10;
  selected: any[] = [];
  temp = [];
  activeRow: any;
  rows: any = []
  SelectionType = SelectionType;  

  constructor(        
    public router: Router,
    private spinner: NgxSpinnerService,
    private organisationService: OrganisationService,
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
    this.getAllSubmissions(); 

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

  getAllSubmissions() {
    
    this.spinner.show();

    this.submissionService.getSubmissions().subscribe(
      (data) => {
        this.submissionService.submissions = data;
      },
      (error) => {
        console.log(error);
        this.spinner.hide();
      },
      () => {
        
        
        this.submissionService.submissions.forEach((submission) => {
          let org = this.organisationService.organisations.find((element) => element.id == submission['client'])
          if (org) {
            submission['client'] = org
          }
          
        })
        
        this.temp = this.submissionService.submissions;   
        this.spinner.hide();
        
      }
    )   

  }

  moveTo(link: string) {

    if (link == 'analysis') {
      this.router.navigateByUrl('/tenders/submission/analysis');
    } else if (link == 'list') {
      this.router.navigateByUrl('/tenders/submission/list');
    } else {

      this.submissionService.submission = this.submissionService.submissions.find(element => element.id == link)

      let url_string = '/tenders/submission/' + link
      this.router.navigateByUrl(url_string)
    }

  }

}
