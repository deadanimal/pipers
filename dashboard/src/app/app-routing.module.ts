import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";

import { AdminLayoutComponent } from "./layouts/admin-layout/admin-layout.component";
import { AuthLayoutComponent } from "./layouts/auth-layout/auth-layout.component";

import { PresentationComponent } from "./pages/presentation/presentation.component";

import { CoreLaunchpadComponent } from './pages/fullviews/core-launchpad/core-launchpad.component';
import { CoreFreehandComponent } from './pages/fullviews/core-freehand/core-freehand.component';
import { CoreComponentComponent } from './pages/fullviews/core-component/core-component.component';

import { RadarLiveviewComponent } from "./pages/fullviews/radar-liveview/radar-liveview.component";
import { RadarActiveradarComponent } from './pages/fullviews/radar-activeradar/radar-activeradar.component';
import { RadarAnalysisComponent } from './pages/fullviews/radar-analysis/radar-analysis.component';

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
    path: "fullviews",
    children: [
      {
        path: 'launchpad',
        component: CoreLaunchpadComponent,
      },
      {
        path: 'freehand',
        component: CoreFreehandComponent,
      },
      {
        path: 'component',
        component: CoreComponentComponent
      },         
      {
        path: 'radar/liveview',
        component: RadarLiveviewComponent
      },       
      {
        path: 'radar/activeradar',
        component: RadarActiveradarComponent
      },         
      {
        path: 'radar/analysis',
        component: RadarAnalysisComponent
      },       
    ]

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
        path: "databases",
        loadChildren: "./pages/databases/databases.module#DatabasesModule"
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
