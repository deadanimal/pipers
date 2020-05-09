import { Component, OnInit } from "@angular/core";
import { AuthenticationService } from 'src/app/services/authentication.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: "app-login",
  templateUrl: "login.component.html"
})
export class LoginComponent implements OnInit {
  focus;
  focus1;

  loginForm: any = {};
  loading = false;
  submitted = false; 
  returnUrl: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public authenticationService: AuthenticationService
    ) {
      if (this.authenticationService.currentUserValue) { 
        this.router.navigate(['/']);
    }
  }

  ngOnInit() {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  onSubmit() {
    this.loading = true;
    console.log(this.loginForm);

    const formData = new FormData();
    formData.append('username', this.loginForm.email);  
    formData.append('password', this.loginForm.password);    


    this.authenticationService.login(formData).subscribe(
      (data: any) => {
        console.log(data);
      },
      (error) => {
        console.log(error);
      },
      () => {
        this.router.navigateByUrl(this.returnUrl);
      }
    )   
      
  }  
}
