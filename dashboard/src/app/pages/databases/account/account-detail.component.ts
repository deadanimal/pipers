import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from '@angular/router'
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { first } from 'rxjs/operators';

import { Account } from '../../../models/account.model';
import { AccountService } from '../../../services/account.service';

@Component({
  selector: "app-database-account-detail",
  templateUrl: "account-detail.component.html"
})
export class AccountDetailComponent implements OnInit {
  
  account: Account;
  _id: string;

  accountForm: any = {};
  loading = false;
  submitted = false;  

  constructor(        
    public route: ActivatedRoute,
    public router: Router,
    private accountService: AccountService) {
  }



  ngOnInit() {

    this._id = this.route.snapshot.params['id'];
    this.account = this.accountService.account;

    if (!this.account) {
      this.getSpecificAccount(this._id)
    } else {
      this.accountForm = this.account;
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

  getSpecificAccount(_id) {
    this.accountService.getAccount(_id).subscribe(
      (data) => {
        this.account = data
      }, (error) => {

      }, () => {

      }
    )
  }

  onSubmit() {
    console.log(this.accountForm);

    const formData = new FormData();
    formData.append('name', this.accountForm.name);  
    formData.append('label', this.accountForm.label);    

    this.accountService.updateAccount(this._id,this.accountForm).subscribe(
      (data: any) => {
        console.log(data);
        this.accountService.account = data;
        this.account = this.accountService.account;
      },
      (error) => {
        console.log(error);
      },
      () => {
        this.router.navigateByUrl('/databases/account')
      }
    )        
  }




}
