import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from '@angular/router'
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { first } from 'rxjs/operators';

import { Bill } from '../../../models/bill.model';
import { BillService } from '../../../services/bill.service';

@Component({
  selector: "app-database-bill-detail",
  templateUrl: "bill-detail.component.html"
})
export class BillDetailComponent implements OnInit {
  
  bill: Bill;
  _id: string;

  billForm: any = {};
  loading = false;
  submitted = false;  

  constructor(        
    public route: ActivatedRoute,
    public router: Router,
    private billService: BillService) {
  }



  ngOnInit() {

    this._id = this.route.snapshot.params['id'];
    this.bill = this.billService.bill;

    if (!this.bill) {
      this.getSpecificBill(this._id)
    } else {
      this.billForm = this.bill;
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

  getSpecificBill(_id) {
    this.billService.getBill(_id).subscribe(
      (data) => {
        this.bill = data
      }, (error) => {

      }, () => {

      }
    )
  }

  onSubmit() {
    console.log(this.billForm);

    const formData = new FormData();
    formData.append('name', this.billForm.name);  
    formData.append('label', this.billForm.label);    

    this.billService.updateBill(this._id,this.billForm).subscribe(
      (data: any) => {
        console.log(data);
        this.billService.bill = data;
        this.bill = this.billService.bill;
      },
      (error) => {
        console.log(error);
      },
      () => {
        this.router.navigateByUrl('/databases/bill')
      }
    )        
  }




}
