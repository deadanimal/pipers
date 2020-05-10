import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { ComponentsModule } from "../../components/components.module";

import { BsDropdownModule } from "ngx-bootstrap";
import { PaginationModule } from "ngx-bootstrap/pagination";
import { ProgressbarModule } from "ngx-bootstrap/progressbar";
import { TooltipModule } from "ngx-bootstrap/tooltip";
import { NgxDatatableModule } from "@swimlane/ngx-datatable";


import { TicketComponent } from './ticket/ticket.component';
import { TicketNewComponent } from './ticket/ticket-new.component';
import { TicketDetailComponent } from './ticket/ticket-detail.component';

import { RouterModule } from "@angular/router";
import { SupportsRoutes } from "./supports.routing";


let componentList = [

  TicketComponent,
  TicketNewComponent, 
  TicketDetailComponent, 

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
    RouterModule.forChild(SupportsRoutes)
  ],
  exports: componentList
})
export class SupportsModule {}
