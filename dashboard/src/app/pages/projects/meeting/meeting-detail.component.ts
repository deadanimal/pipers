import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from '@angular/router'
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { first } from 'rxjs/operators';

import { Meeting } from '../../../models/meeting.model';
import { MeetingService } from '../../../services/meeting.service';

@Component({
  selector: "app-project-meeting-detail",
  templateUrl: "meeting-detail.component.html"
})
export class MeetingDetailComponent implements OnInit {
  
  meeting: Meeting;
  _id: string;

  meetingForm: any = {};
  loading = false;
  submitted = false;  

  constructor(        
    public route: ActivatedRoute,
    public router: Router,
    private meetingService: MeetingService) {
  }



  ngOnInit() {

    this._id = this.route.snapshot.params['id'];
    this.meeting = this.meetingService.meeting;

    if (!this.meeting) {
      this.getSpecificMeeting(this._id)
    } else {
      this.meetingForm = this.meeting;
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

  getSpecificMeeting(_id) {
    this.meetingService.getMeeting(_id).subscribe(
      (data) => {
        this.meeting = data
      }, (error) => {

      }, () => {

      }
    )
  }

  onSubmit() {
    console.log(this.meetingForm);

    const formData = new FormData();
    formData.append('name', this.meetingForm.name);  
    formData.append('label', this.meetingForm.label);    

    this.meetingService.updateMeeting(this._id,this.meetingForm).subscribe(
      (data: any) => {
        console.log(data);
        this.meetingService.meeting = data;
        this.meeting = this.meetingService.meeting;
      },
      (error) => {
        console.log(error);
      },
      () => {
        this.router.navigateByUrl('/projects/meeting')
      }
    )        
  }




}
