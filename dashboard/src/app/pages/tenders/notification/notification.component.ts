import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router'
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { first } from 'rxjs/operators';
import List from "list.js";
//import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from "ngx-toastr";

import { OrganisationService } from 'src/app/services/organisation.service';

import { Notification } from '../../../models/notification.model';
import { NotificationService } from '../../../services/notification.service';
import { NgxSpinnerService } from 'ngx-spinner';

export enum SelectionType {
  single = "single",
  multi = "multi",
  multiClick = "multiClick",
  cell = "cell",
  checkbox = "checkbox"
}

@Component({
  selector: "app-project-notification",
  templateUrl: "notification.component.html"
})
export class NotificationComponent implements OnInit {
  
  notifications: Notification[] = [];

  entries: number = 10;
  selected: any[] = [];
  temp = [];
  activeRow: any;
  rows: any = []
  SelectionType = SelectionType;  

  constructor(        
    public router: Router,
    private spinner: NgxSpinnerService,
    private toastr: ToastrService,
    public organisationService: OrganisationService,
    private notificationService: NotificationService) {
  
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
    this.getAllNotifications();

    var navbar = document.getElementsByClassName("navbar-top")[0];
    navbar.classList.add("bg-secondary");
    navbar.classList.add("navbar-light");
    navbar.classList.remove("bg-danger");
    navbar.classList.remove("navbar-dark");

    var navbarSearch = document.getElementsByClassName("navbar-search")[0];
    navbarSearch.classList.add("navbar-search-dark");
    navbarSearch.classList.remove("navbar-search-light");   
    
    /*
    new List(document.getElementById("first-list"), {
      valueNames: ["project", "client", "submission_date", "source", "status"],
      listClass: "list"
    });    
    */
      
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

  getAllNotifications() {
    
    //this.spinner.show();

    this.notificationService.getNotificationsAction('created').subscribe(
      (data) => {
        this.notificationService.notifications = data;
        this.temp = data;
      },
      (error) => {
        console.log(error);
        //this.spinner.hide();
      },
      () => {

        this.notificationService.notifications.forEach((submission) => {
          let org = this.organisationService.organisations.find((element) => element.id == submission['client'])
          if (org) {
            submission['client'] = org
          }
          
        })   
        
        this.notifications = this.notificationService.notifications;
        console.log(this.notifications)
        //this.spinner.hide();

        /*
        this.toastr.show(
          '<span class="alert-title" data-notify="title">Notification</span> <span data-notify="message">Received "created" notifications</span></div>',
          '',
          {
            timeOut: 1000,
            closeButton: true,
            enableHtml: true,
            tapToDismiss: false,
            titleClass: 'alert-title',
            positionClass: 'toast-top-right',
            toastClass: "ngx-toastr alert alert-dismissible alert-default alert-notify",
          }); 
        */       
      }
    )   

  }

  moveTo(link) {

    if (link == 'new') {
      this.router.navigateByUrl('/tenders/notification/new')
    } else if (link == 'list') {
      this.router.navigateByUrl('/tenders/notification/list')
    } else {

      this.notificationService.notification = this.notificationService.notifications.find(element => element.id == link)

      let url_string = '/tenders/notification/' + link
      this.router.navigateByUrl(url_string)
    }

  }


}
