import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from "@angular/core";  
import { ROUTES } from "../sidebar/sidebar.component";
import { Router, Event, NavigationStart, NavigationEnd, NavigationError } from '@angular/router';
import { ShortcutInput, ShortcutEventOutput, KeyboardShortcutsComponent } from "ng-keyboard-shortcuts";  
import * as _ from 'underscore';


import {
  Location,
  LocationStrategy,
  PathLocationStrategy
} from "@angular/common";

import { AuthenticationService } from 'src/app/services/authentication.service';

import { OrganisationService } from 'src/app/services/organisation.service';
import { ProjectService } from 'src/app/services/project.service';
import { SubmissionService } from 'src/app/services/submission.service';

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"]
})
export class NavbarComponent implements OnInit {
  
  public focus;
  public listTitles: any[];
  public location: Location;
  sidenavOpen: boolean = true;

  public username: string = '';
  public profile_picture: string = '';

  shortcuts: ShortcutInput[] = [];  
  @ViewChild('input') input: ElementRef; 

  constructor(
    location: Location,
    private element: ElementRef,
    private router: Router,
    private organisationService: OrganisationService,
    private projectService: ProjectService,
    private submissionService: SubmissionService,
    public authenticationService: AuthenticationService
  ) {
    this.location = location;
    this.router.events.subscribe((event: Event) => {
       if (event instanceof NavigationStart) {
           // Show loading indicator

       }
       if (event instanceof NavigationEnd) {
           // Hide loading indicator

           if (window.innerWidth < 1200) {
             document.body.classList.remove("g-sidenav-pinned");
             document.body.classList.add("g-sidenav-hidden");
             this.sidenavOpen = false;
           }
       }

       if (event instanceof NavigationError) {
           // Hide loading indicator

           // Present error to user
           console.log(event.error);
       }
   });


  }

  ngOnInit() {

    this.initialDownload();

    this.listTitles = ROUTES.filter(listTitle => listTitle);

    if (this.authenticationService.currentUser && this.authenticationService.currentUser['profile_picture']) {
      this.authenticationService.currentUser['profile_picture'];
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
  getTitle() {
    var titlee = this.location.prepareExternalUrl(this.location.path());
    if (titlee.charAt(0) === "#") {
      titlee = titlee.slice(1);
    }

    for (var item = 0; item < this.listTitles.length; item++) {
      if (this.listTitles[item].path === titlee) {
        return this.listTitles[item].title;
      }
    }
    return "Dashboard";
  }

  openSearch() {
    document.body.classList.add("g-navbar-search-showing");
    setTimeout(function() {
      document.body.classList.remove("g-navbar-search-showing");
      document.body.classList.add("g-navbar-search-show");
    }, 150);
    setTimeout(function() {
      document.body.classList.add("g-navbar-search-shown");
    }, 300);
  }
  closeSearch() {
    document.body.classList.remove("g-navbar-search-shown");
    setTimeout(function() {
      document.body.classList.remove("g-navbar-search-show");
      document.body.classList.add("g-navbar-search-hiding");
    }, 150);
    setTimeout(function() {
      document.body.classList.remove("g-navbar-search-hiding");
      document.body.classList.add("g-navbar-search-hidden");
    }, 300);
    setTimeout(function() {
      document.body.classList.remove("g-navbar-search-hidden");
    }, 500);
  }
  openSidebar() {
    if (document.body.classList.contains("g-sidenav-pinned")) {
      document.body.classList.remove("g-sidenav-pinned");
      document.body.classList.add("g-sidenav-hidden");
      this.sidenavOpen = false;
    } else {
      document.body.classList.add("g-sidenav-pinned");
      document.body.classList.remove("g-sidenav-hidden");
      this.sidenavOpen = true;
    }
  }
  toggleSidenav() {
    if (document.body.classList.contains("g-sidenav-pinned")) {
      document.body.classList.remove("g-sidenav-pinned");
      document.body.classList.add("g-sidenav-hidden");
      this.sidenavOpen = false;
    } else {
      document.body.classList.add("g-sidenav-pinned");
      document.body.classList.remove("g-sidenav-hidden");
      this.sidenavOpen = true;
    }
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigateByUrl('/');
  }

  ngAfterViewInit(): void {  
    this.shortcuts.push(  

       {
            key: ["? a"],
            label: "Sequences",
            description: "Sequence ? and a",
            command: (output: ShortcutEventOutput) => console.log("? a", output),
            preventDefault: true
        },            
        {
            key: ["up up down down left right left right b a enter"],
            label: "Sequences",
            description: "Konami code!",
            command: (output: ShortcutEventOutput) => console.log("Konami code!!!", output),
        },
        {  
            key: "cmd + shift + f",  
            command: (output: ShortcutEventOutput) => console.log(output),  
            preventDefault: true,  
            throttleTime: 250,  
        },  
        {  
            key: ["cmd + =", "cmd + z"],  
            command: (output: ShortcutEventOutput) => console.log(output),  
            preventDefault: true  
        },  
        {  
            key: "cmd + f",  
            command: (output: ShortcutEventOutput) => console.log(output),  
            preventDefault: true  
        }  
    );  

    this.keyboard.select("cmd + f").subscribe(e => console.log(e));  
  }
  
  initialDownload() {
    this.organisationService.getOrganisations()
      .subscribe((data) =>{
        this.organisationService.organisations = _.sortBy(data, 'name'); 
    })

    this.projectService.getProjects()
    .subscribe((data) =>{
      this.projectService.projects = _.sortBy(data, 'name'); 
    })  
    
    this.submissionService.getSubmissions()
    .subscribe((data) =>{
      this.submissionService.submissions = _.sortBy(data, 'name'); 
    })       
     
  }

  @ViewChild(KeyboardShortcutsComponent) private keyboard: KeyboardShortcutsComponent;    

}
