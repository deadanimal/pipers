import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { ComponentsModule } from "../../components/components.module";

import { BsDropdownModule } from "ngx-bootstrap";
import { PaginationModule } from "ngx-bootstrap/pagination";
import { ProgressbarModule } from "ngx-bootstrap/progressbar";
import { TooltipModule } from "ngx-bootstrap/tooltip";
import { NgxDatatableModule } from "@swimlane/ngx-datatable";

import { NotificationComponent } from './notification/notification.component';
import { NotificationNewComponent } from './notification/notification-new.component';
import { NotificationDetailComponent } from './notification/notification-detail.component';


import { RouterModule } from "@angular/router";
import { TendersRoutes } from "./tenders.routing";


let componentList = [

  NotificationComponent,
  NotificationNewComponent,
  NotificationDetailComponent,

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
    RouterModule.forChild(TendersRoutes)
  ],
  exports: componentList
})
export class TendersModule {}
