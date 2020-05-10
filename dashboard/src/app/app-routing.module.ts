import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";

import { AdminLayoutComponent } from "./layouts/admin-layout/admin-layout.component";
import { AuthLayoutComponent } from "./layouts/auth-layout/auth-layout.component";

import { PresentationComponent } from "./pages/presentation/presentation.component";



const routes: Routes = [
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full"
  },
  {
    path: "home",
    component: PresentationComponent
  },  

  {
    path: "",
    component: AdminLayoutComponent,
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
