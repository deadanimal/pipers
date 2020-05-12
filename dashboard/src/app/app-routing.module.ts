import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";

import { AdminLayoutComponent } from "./layouts/admin-layout/admin-layout.component";
import { AuthLayoutComponent } from "./layouts/auth-layout/auth-layout.component";
import { PresentationLayoutComponent } from "./layouts/presentation-layout/presentation-layout.component";

import { AuthGuard } from './helpers/auth.guard';

const routes: Routes = [
  {
    path: "",
    redirectTo: "p",
    pathMatch: "full"
  },
  {
    path: "",
    component: PresentationLayoutComponent,
    children: [
      {
        path: "p",
        loadChildren: "./pages/presentations/presentations.module#PresentationsModule"
      },
    ]
  },

  {
    path: "",
    component: AdminLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: "dashboards",
        loadChildren: "./pages/dashboards/dashboards.module#DashboardsModule"
      },
      {
        path: "developments",
        loadChildren: "./pages/developments/developments.module#DevelopmentsModule"
      },      
      {
        path: "managements",
        loadChildren: "./pages/managements/managements.module#ManagementsModule"
      },         
      {
        path: "projects",
        loadChildren: "./pages/projects/projects.module#ProjectsModule"
      },     
      {
        path: "sales",
        loadChildren: "./pages/sales/sales.module#SalesModule"
      },    
      {
        path: "supports",
        loadChildren: "./pages/supports/supports.module#SupportsModule"
      },                    
      {
        path: "tenders",
        loadChildren: "./pages/tenders/tenders.module#TendersModule"
      },           
        

    ]
  },
  {
    path: "",
    component: AuthLayoutComponent,
    children: [
      {
        path: "authentication",
        loadChildren: "./layouts/auth-layout/auth-layout.module#AuthLayoutModule"
      },
    ]
  },
 
  {
    path: "**",
    redirectTo: "dashboard"
  }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes, {
      useHash: true
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
