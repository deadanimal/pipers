import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from '@angular/router'
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { first } from 'rxjs/operators';

import { Diagram } from '../../../models/diagram.model';
import { DiagramService } from '../../../services/diagram.service';
import { OrganisationService } from 'src/app/services/organisation.service';
import { ProjectService } from 'src/app/services/project.service';
import { SubmissionService } from 'src/app/services/submission.service';

@Component({
  selector: "app-project-diagram-detail",
  templateUrl: "diagram-detail.component.html"
})
export class DiagramDetailComponent implements OnInit {
  
  diagram
  _id: string;

  diagramForm: any = {};
  loading = false;
  submitted = false;  

  organisations;
  projects;
  submissions;

  svg_link: string = ''

  constructor(        
    public route: ActivatedRoute,
    public router: Router,
    private diagramService: DiagramService,    
    private organisationService: OrganisationService,
    private projectService: ProjectService,
    private submissionService: SubmissionService) {
  }



  ngOnInit() {

    this._id = this.route.snapshot.params['id'];
    this.diagram = this.diagramService.diagram;

    this.organisations = this.organisationService.organisations;
    this.projects = this.projectService.projects;
    this.submissions = this.submissionService.submissions;  
          

    if (!this.diagram) {
      this.getSpecificDiagram(this._id)
    } else {
      this.diagramForm = this.diagram;
      this.generateUML()
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

  getSpecificDiagram(_id) {
    this.diagramService.getDiagram(_id).subscribe(
      (data) => {
        this.diagram = data
      }, (error) => {

      }, () => {
        this.generateUML()
      }
    )
  }

  onSubmit() {
    console.log(this.diagram);

    let diagramForm = {
      'name': this.diagram.name,
      'code': this.diagram.code
    }
   
    console.log(diagramForm)

    this.diagramService.updateDiagram(this._id, diagramForm).subscribe(
      (data: any) => {
        console.log(data);
        this.diagramService.diagram = data;
        this.diagram = this.diagramService.diagram;
      },
      (error) => {
        console.log(error);
      },
      () => {
        this.router.navigateByUrl('/developments/diagram')
      }
    )        
  }

  generateUML() {
    this.diagramService.generateUML(this.diagramForm.code).subscribe(
      (data: any) => {
        this.svg_link = data['svg_link']
      }
    )
  }  

  delete(diagram) {
    this.diagramService.deleteDiagram(diagram.id).subscribe(
      (data: any) => {
        
      }, (error) => {

      }, () => {
        this.router.navigateByUrl('/developments/diagram')
      })
  }




}
