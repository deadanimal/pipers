import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { ComponentsModule } from "../../components/components.module";

import { BsDropdownModule } from "ngx-bootstrap";
import { PaginationModule } from "ngx-bootstrap/pagination";
import { ProgressbarModule } from "ngx-bootstrap/progressbar";
import { TooltipModule } from "ngx-bootstrap/tooltip";
import { NgxDatatableModule } from "@swimlane/ngx-datatable";

import { FlowComponent } from './flow/flow.component';
import { FlowNewComponent } from './flow/flow-new.component';
import { FlowDetailComponent } from './flow/flow-detail.component';


import { RouterModule } from "@angular/router";
import { DevelopmentsRoutes } from "./developments.routing";


let componentList = [

  FlowComponent,
  FlowNewComponent,
  FlowDetailComponent,

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
    RouterModule.forChild(DevelopmentsRoutes)
  ],
  exports: componentList
})
export class DevelopmentsModule {}
