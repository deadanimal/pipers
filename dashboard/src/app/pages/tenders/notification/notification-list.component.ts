import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from '@angular/router'
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { first } from 'rxjs/operators';

import { Notification } from '../../../models/notification.model';
import { NotificationService } from '../../../services/notification.service';
import { OrganisationService } from 'src/app/services/organisation.service';


export enum SelectionType {
  single = "single",
  multi = "multi",
  multiClick = "multiClick",
  cell = "cell",
  checkbox = "checkbox"
}

@Component({
  selector: "app-project-notification-list",
  templateUrl: "notification-list.component.html"
})
export class NotificationListComponent implements OnInit {
  
  notifications: Notification[] = [];

  entries: number = 10;
  selected: any[] = [];
  temp = [];
  activeRow: any;
  rows: any = []
  SelectionType = SelectionType;  

  constructor(        
    public route: ActivatedRoute,
    public router: Router,
    private organisationService: OrganisationService,
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

  moveTo(link) {

    this.notificationService.notification = this.notificationService.notifications.find(element => element.id == link)
    let url_string = '/tenders/notification/' + link
    this.router.navigateByUrl(url_string)

  }

  filterBy(char) {
    console.log(char)
    if (char =='a') {
      this.temp = this.notifications.filter((element) => element['status'] == 'AR')
    } else if (char =='c') {
      this.temp = this.notifications.filter((element) => element['status'] == 'CR')
    } else if (char =='s') {
      this.temp = this.notifications.filter((element) => element['status'] == 'SM')
    } else {
      this.temp = this.notifications;
    }
    console.log(this.temp)
  }

  getAllNotifications() {
    
    //this.spinner.show();

    this.notificationService.getNotifications().subscribe(
      (data) => {
        this.notificationService.notifications = data;
      },
      (error) => {
        console.log(error);
        //this.spinner.hide();
      },
      () => {

        this.notificationService.notifications.forEach((notification) => {
          let org = this.organisationService.organisations.find((element) => element.id == notification['client'])
          if (org) {
            notification['client'] = org
          }
          
        })



        this.notifications = this.notificationService.notifications;
        this.temp = this.notifications;     
        //this.spinner.hide();
      }
    )   

  }



}
