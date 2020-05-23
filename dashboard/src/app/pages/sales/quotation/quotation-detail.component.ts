import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from '@angular/router'
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { first } from 'rxjs/operators';

import { Quotation } from '../../../models/quotation.model';
import { QuotationService } from '../../../services/quotation.service';

@Component({
  selector: "app-project-quotation-detail",
  templateUrl: "quotation-detail.component.html"
})
export class QuotationDetailComponent implements OnInit {
  
  quotation: Quotation;
  _id: string;

  quotationForm: any = {};
  loading = false;
  submitted = false;  

  constructor(        
    public route: ActivatedRoute,
    public router: Router,
    private quotationService: QuotationService) {
  }



  ngOnInit() {

    this._id = this.route.snapshot.params['id'];
    this.quotation = this.quotationService.quotation;

    if (!this.quotation) {
      this.getSpecificQuotation(this._id)
    } else {
      this.quotationForm = this.quotation;
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

  getSpecificQuotation(_id) {
    this.quotationService.getQuotation(_id).subscribe(
      (data) => {
        this.quotation = data
      }, (error) => {

      }, () => {

      }
    )
  }

  onSubmit() {
    console.log(this.quotationForm);

    const formData = new FormData();
    formData.append('name', this.quotationForm.name);  
    formData.append('label', this.quotationForm.label);    

    this.quotationService.updateQuotation(this._id,this.quotationForm).subscribe(
      (data: any) => {
        console.log(data);
        this.quotationService.quotation = data;
        this.quotation = this.quotationService.quotation;
      },
      (error) => {
        console.log(error);
      },
      () => {
        this.router.navigateByUrl('/sales/quotation')
      }
    )        
  }




}
