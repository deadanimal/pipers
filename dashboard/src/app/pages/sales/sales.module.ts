import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { ComponentsModule } from "../../components/components.module";

import { BsDropdownModule } from "ngx-bootstrap";
import { PaginationModule } from "ngx-bootstrap/pagination";
import { ProgressbarModule } from "ngx-bootstrap/progressbar";
import { TooltipModule } from "ngx-bootstrap/tooltip";
import { NgxDatatableModule } from "@swimlane/ngx-datatable";

import { CampaignComponent } from './campaign/campaign.component';
import { CampaignNewComponent } from './campaign/campaign-new.component';
import { CampaignDetailComponent } from './campaign/campaign-detail.component';


import { RouterModule } from "@angular/router";
import { SalesRoutes } from "./sales.routing";


let componentList = [

  CampaignComponent,
  CampaignNewComponent,
  CampaignDetailComponent,

]

@NgModule({
  declarations: componentList,
  imports: [
    CommonModule,
    ComponentsModule,
    FormsModule,
    NgxDatatableModule,
    BsDropdownModule.forRoot(),
    PaginationModule.forRoot(),
    ProgressbarModule.forRoot(),
    TooltipModule.forRoot(),
    RouterModule.forChild(SalesRoutes)
  ],
  exports: componentList
})
export class SalesModule {}
