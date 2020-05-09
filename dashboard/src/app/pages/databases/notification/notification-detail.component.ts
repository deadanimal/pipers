import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from '@angular/router'
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { first } from 'rxjs/operators';

import { Notification } from '../../../models/notification.model';
import { NotificationService } from '../../../services/notification.service';

@Component({
  selector: "app-database-notification-detail",
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
    console.log(this.notificationForm);

    const formData = new FormData();
    formData.append('name', this.notificationForm.name);  
    formData.append('label', this.notificationForm.label);    

    this.notificationService.updateNotification(this._id,this.notificationForm).subscribe(
      (data: any) => {
        console.log(data);
        this.notificationService.notification = data;
        this.notification = this.notificationService.notification;
      },
      (error) => {
        console.log(error);
      },
      () => {
        this.router.navigateByUrl('/databases/notification')
      }
    )        
  }




}
