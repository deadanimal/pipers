import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from '@angular/router'
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { first } from 'rxjs/operators';

import { User } from '../../../models/user.model';
import { UserService } from '../../../services/user.service';
import { OrganisationService } from 'src/app/services/organisation.service';

@Component({
  selector: "app-user-user-detail",
  templateUrl: "user-detail.component.html"
})
export class UserDetailComponent implements OnInit {
  
  user: User;
  _id: string;

  userForm: any = {};
  loading = false;
  submitted = false;  

  organisations;

  constructor(        
    public route: ActivatedRoute,
    public router: Router,
    private userService: UserService,
    private organisationService: OrganisationService,
    ) {
  }



  ngOnInit() {

    this._id = this.route.snapshot.params['id'];
    this.user = this.userService.user;
    this.organisations = this.organisationService.organisations;

    if (!this.user) {
      this.getSpecificUser(this._id)
    } else {
      this.userForm = this.user;
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

  getSpecificUser(_id) {
    this.userService.getUser(_id).subscribe(
      (data) => {
        this.user = data
      }, (error) => {

      }, () => {

      }
    )
  }

  onSubmit() {
    console.log(this.userForm);

    const formData = new FormData();
    formData.append('name', this.userForm.name);  
    formData.append('label', this.userForm.label);    

    this.userService.updateUser(this._id,this.userForm).subscribe(
      (data: any) => {
        console.log(data);
        this.userService.user = data;
        this.user = this.userService.user;
      },
      (error) => {
        console.log(error);
      },
      () => {
        this.router.navigateByUrl('/managements/user')
      }
    )        
  }




}
