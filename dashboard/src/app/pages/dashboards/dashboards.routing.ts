import { Routes } from "@angular/router";

import { DashboardComponent } from "./dashboard/dashboard.component";
import { AlternativeComponent } from "./alternative/alternative.component";
import { RadarComponent } from "./radar/radar.component";

export const DashboardsRoutes: Routes = [
  {
    path: "",
    children: [
      {
        path: "dashboard",
        component: DashboardComponent
      },
      {
        path: "radar",
        component: RadarComponent
      },      {
        path: "alternative",
        component: AlternativeComponent
      }
    ]
  }
];
