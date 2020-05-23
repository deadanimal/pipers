import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from '@angular/router'
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { first } from 'rxjs/operators';

import { Notification } from '../../../models/notification.model';
import { NotificationService } from '../../../services/notification.service';

@Component({
  selector: "app-project-notification-detail",
  templateUrl: "notification-detail.component.html"
})
export class NotificationDetailComponent implements OnInit {
  
  notification: Notification;
  _id: string;

  notificationForm: any = {};
  loading = false;
  submitted = false;  

  constructor(        
    public route: ActivatedRoute,
    public router: Router,
    private notificationService: NotificationService) {
  }



  ngOnInit() {

    this._id = this.route.snapshot.params['id'];
    this.notification = this.notificationService.notification;

    if (!this.notification) {
      this.getSpecificNotification(this._id)
    } else {
      this.notificationForm = this.notification;
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

  getSpecificNotification(_id) {
    this.notificationService.getNotification(_id).subscribe(
      (data) => {
        this.notification = data
      }, (error) => {

      }, () => {

      }
    )
  }

  onSubmit() {
  
    let new_form = {
      'project': this.notificationForm.project,
      'briefing_required': this.notificationForm.briefing_required,
      'submission_required': this.notificationForm.submission_required,
      'source': this.notificationForm.source
    }

    this.notificationService.updateNotification(this._id, new_form).subscribe(
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

  action(action_type) {

    if (action_type == 'approve') {
      this.notificationService.approveNotification(this._id).subscribe(
        (data: any) => {

        },
        (error) => {

        },
        () => {
          this.router.navigateByUrl('/tenders/notification')
        }
      )
    } else if (action_type == 'reject') {
      this.notificationService.rejectNotification(this._id).subscribe(
        (data: any) => {

        },
        (error) => {

        },
        () => {
          this.router.navigateByUrl('/tenders/notification')
        }
      )
    }

  }




}
