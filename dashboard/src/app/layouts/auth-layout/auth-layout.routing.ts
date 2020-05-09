import { Routes } from "@angular/router";

import { LoginComponent } from "../../pages/authentication/login/login.component";
import { PricingComponent } from "../../pages/authentication/pricing/pricing.component";
import { LockComponent } from "../../pages/authentication/lock/lock.component";
import { RegisterComponent } from "../../pages/authentication/register/register.component";

export const AuthLayoutRoutes: Routes = [
  {
    path: "",
    children: [
      {
        path: "login",
        component: LoginComponent
      }
    ]
  },
  {
    path: "",
    children: [
      {
        path: "lock",
        component: LockComponent
      }
    ]
  },
  {
    path: "",
    children: [
      {
        path: "register",
        component: RegisterComponent
      }
    ]
  },
  {
    path: "",
    children: [
      {
        path: "pricing",
        component: PricingComponent
      }
    ]
  }
];
