import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ComponentsModule } from "../../components/components.module";

import { BsDropdownModule } from "ngx-bootstrap";
import { ProgressbarModule } from "ngx-bootstrap/progressbar";
import { TooltipModule } from "ngx-bootstrap/tooltip";

import { DashboardComponent } from "./dashboard/dashboard.component";

import { RouterModule } from "@angular/router";
import { DashboardsRoutes } from "./dashboards.routing";
import { FormsModule } from '@angular/forms';


let componentList = [
  DashboardComponent,
]

@NgModule({
  declarations: componentList,
  imports: [
    CommonModule,
    ComponentsModule,
    FormsModule,
    BsDropdownModule.forRoot(),
    ProgressbarModule.forRoot(),
    TooltipModule.forRoot(),
    RouterModule.forChild(DashboardsRoutes)
  ],
  exports: componentList
})
export class DashboardsModule {}
