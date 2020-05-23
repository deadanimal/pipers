import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from '@angular/router'
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { first } from 'rxjs/operators';

import { Document } from '../../../models/document.model';
import { DocumentService } from '../../../services/document.service';

@Component({
  selector: "app-project-document-detail",
  templateUrl: "document-detail.component.html"
})
export class DocumentDetailComponent implements OnInit {
  
  document: Document;
  _id: string;

  documentForm: any = {};
  loading = false;
  submitted = false;  

  constructor(        
    public route: ActivatedRoute,
    public router: Router,
    private documentService: DocumentService) {
  }



  ngOnInit() {

    this._id = this.route.snapshot.params['id'];
    this.document = this.documentService.document;

    if (!this.document) {
      this.getSpecificDocument(this._id)
    } else {
      this.documentForm = this.document;
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

  getSpecificDocument(_id) {
    this.documentService.getDocument(_id).subscribe(
      (data) => {
        this.document = data
      }, (error) => {

      }, () => {

      }
    )
  }

  onSubmit() {
    console.log(this.documentForm);

    const formData = new FormData();
    formData.append('name', this.documentForm.name);  
    formData.append('label', this.documentForm.label);    

    this.documentService.updateDocument(this._id,this.documentForm).subscribe(
      (data: any) => {
        console.log(data);
        this.documentService.document = data;
        this.document = this.documentService.document;
      },
      (error) => {
        console.log(error);
      },
      () => {
        this.router.navigateByUrl('/projects/document')
      }
    )        
  }




}
