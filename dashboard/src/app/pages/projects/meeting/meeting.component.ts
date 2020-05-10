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

import { Meeting } from '../../../models/meeting.model';
import { MeetingService } from '../../../services/meeting.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: "app-project-meeting",
  templateUrl: "meeting.component.html"
})
export class MeetingComponent implements OnInit {
  
  meetings: Meeting[];

  entries: number = 10;
  selected: any[] = [];
  temp = [];
  activeRow: any;
  rows: any = []
  SelectionType = SelectionType;

  constructor(        
    public router: Router,
    private spinner: NgxSpinnerService,
    private meetingService: MeetingService) {
   

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
    //this.getAllMeetings();

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

  getAllMeetings() {
    
    this.spinner.show();

    this.meetingService.getMeetings().subscribe(
      (data) => {
        this.meetingService.meetings = data;
      },
      (error) => {
        console.log(error);
        this.spinner.hide();
      },
      () => {
        this.meetings = this.meetingService.meetings;
        this.temp = this.meetings;
        this.spinner.hide();
      }
    )   

  }

  moveTo(link) {

    if (link == 'new') {
      this.router.navigateByUrl('/projects/meeting/new')
    } else {

      this.meetingService.meeting = this.meetingService.meetings.find(element => element.id == link)

      let url_string = '/projects/meeting/' + link
      this.router.navigateByUrl(url_string)
    }

  }

}
