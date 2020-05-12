import { Component, OnInit } from "@angular/core";
import { AuthenticationService } from 'src/app/services/authentication.service';
import { ActivatedRoute, Router } from '@angular/router';


import * as jwt_decode from 'jwt-decode';


@Component({
  selector: "app-login",
  templateUrl: "login.component.html"
})
export class LoginComponent implements OnInit {
  focus;
  focus1;

  loginForm: any = {
    username: '',
    password: ''
  };
  loading = false;
  submitted = false; 
  returnUrl: string;

  constructor(
    private route: ActivatedRoute,
    public router: Router,
    public authenticationService: AuthenticationService
    ) {}

  ngOnInit() {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  onSubmit() {
    this.loading = true;

    let userId: string;

    this.authenticationService.login(this.loginForm.username, this.loginForm.password).subscribe(
      (token: any) => {        
        let decodedToken = jwt_decode(token['access']); 
        userId = decodedToken.user_id;
        
      },
      (error) => {
        console.log(error);
      },
      () => {

        this.authenticationService.getOwnUserDetail(userId)
          .subscribe((data)=> {
            //console.log(data)
          },(error)=> {

          },()=> {
            this.router.navigateByUrl(this.returnUrl);
          })
        
      }
    )   
      
  }  
}
