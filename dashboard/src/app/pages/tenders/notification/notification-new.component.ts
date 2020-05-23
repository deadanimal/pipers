import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router'
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { first } from 'rxjs/operators';

import * as moment from "moment";
import "moment-timezone";


import { Notification } from '../../../models/notification.model';
import { NotificationService } from '../../../services/notification.service';

import { Organisation } from '../../../models/organisation.model';
import { OrganisationService } from '../../../services/organisation.service';

@Component({
  selector: "app-project-notification-new",
  templateUrl: "notification-new.component.html"
})
export class NotificationNewComponent implements OnInit {
  
  notifications: Notification[];
  organisations: Organisation[];
  
  notificationForm: any = {};
  loading = false;
  submitted = false;  



  constructor(        
    public router: Router,
    private notificationService: NotificationService,
    private organisationService: OrganisationService,) {
 
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
    
    let b = this.notificationForm.briefing_date;
    let s = this.notificationForm.submission_date;

    if (b) {
      let b_ = moment(b).toDate();
      this.notificationForm.briefing_date = b_;
    }    
    
    if (s) {
      let s_ = moment(s).toDate();
      this.notificationForm.submission_date = s_;     
    }

    this.notificationService.newNotification(this.notificationForm).subscribe(
      (data: any) => {
        console.log(data);
      },
      (error) => {
        console.log(error);
      },
      () => {
        this.router.navigateByUrl('/tenders/notification')
      }
    )        
  }



}
