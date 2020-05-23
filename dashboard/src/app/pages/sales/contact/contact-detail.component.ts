import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from '@angular/router'
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { first } from 'rxjs/operators';

import { Contact } from '../../../models/contact.model';
import { ContactService } from '../../../services/contact.service';

@Component({
  selector: "app-project-contact-detail",
  templateUrl: "contact-detail.component.html"
})
export class ContactDetailComponent implements OnInit {
  
  contact: Contact;
  _id: string;

  contactForm: any = {};
  loading = false;
  submitted = false;  

  constructor(        
    public route: ActivatedRoute,
    public router: Router,
    private contactService: ContactService) {
  }



  ngOnInit() {

    this._id = this.route.snapshot.params['id'];
    this.contact = this.contactService.contact;

    if (!this.contact) {
      this.getSpecificContact(this._id)
    } else {
      this.contactForm = this.contact;
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

  getSpecificContact(_id) {
    this.contactService.getContact(_id).subscribe(
      (data) => {
        this.contact = data
      }, (error) => {

      }, () => {

      }
    )
  }

  onSubmit() {
    console.log(this.contactForm);

    const formData = new FormData();
    formData.append('name', this.contactForm.name);  
    formData.append('label', this.contactForm.label);    

    this.contactService.updateContact(this._id,this.contactForm).subscribe(
      (data: any) => {
        console.log(data);
        this.contactService.contact = data;
        this.contact = this.contactService.contact;
      },
      (error) => {
        console.log(error);
      },
      () => {
        this.router.navigateByUrl('/sales/contact')
      }
    )        
  }




}
