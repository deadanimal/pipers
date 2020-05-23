import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from '@angular/router'
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { first } from 'rxjs/operators';

import { Invoice } from '../../../models/invoice.model';
import { InvoiceService } from '../../../services/invoice.service';

@Component({
  selector: "app-project-invoice-detail",
  templateUrl: "invoice-detail.component.html"
})
export class InvoiceDetailComponent implements OnInit {
  
  invoice: Invoice;
  _id: string;

  invoiceForm: any = {};
  loading = false;
  submitted = false;  

  constructor(        
    public route: ActivatedRoute,
    public router: Router,
    private invoiceService: InvoiceService) {
  }



  ngOnInit() {

    this._id = this.route.snapshot.params['id'];
    this.invoice = this.invoiceService.invoice;

    if (!this.invoice) {
      this.getSpecificInvoice(this._id)
    } else {
      this.invoiceForm = this.invoice;
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

  getSpecificInvoice(_id) {
    this.invoiceService.getInvoice(_id).subscribe(
      (data) => {
        this.invoice = data
      }, (error) => {

      }, () => {

      }
    )
  }

  onSubmit() {
    console.log(this.invoiceForm);

    const formData = new FormData();
    formData.append('name', this.invoiceForm.name);  
    formData.append('label', this.invoiceForm.label);    

    this.invoiceService.updateInvoice(this._id,this.invoiceForm).subscribe(
      (data: any) => {
        console.log(data);
        this.invoiceService.invoice = data;
        this.invoice = this.invoiceService.invoice;
      },
      (error) => {
        console.log(error);
      },
      () => {
        this.router.navigateByUrl('/sales/invoice')
      }
    )        
  }




}
