import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { ComponentsModule } from "../../components/components.module";

import { BsDropdownModule } from "ngx-bootstrap";
import { PaginationModule } from "ngx-bootstrap/pagination";
import { ProgressbarModule } from "ngx-bootstrap/progressbar";
import { TooltipModule } from "ngx-bootstrap/tooltip";
import { NgxDatatableModule } from "@swimlane/ngx-datatable";

import { AccountDetailComponent } from './account/account-detail.component';
import { AccountNewComponent } from './account/account-new.component';
import { AccountComponent } from "./account/account.component";

import { ApplianceDetailComponent } from './appliance/appliance-detail.component';
import { ApplianceNewComponent } from './appliance/appliance-new.component';
import { ApplianceComponent } from "./appliance/appliance.component";

import { BillDetailComponent } from './bill/bill-detail.component';
import { BillNewComponent } from './bill/bill-new.component';
import { BillComponent } from './bill/bill.component';

import { BuildingDetailComponent } from './building/building-detail.component';
import { BuildingNewComponent } from './building/building-new.component';
import { BuildingComponent } from './building/building.component';

import { DeviceDetailComponent } from './device/device-detail.component';
import { DeviceNewComponent } from './device/device-new.component';
import { DeviceComponent } from './device/device.component';

import { GatewayDetailComponent } from './gateway/gateway-detail.component';
import { GatewayNewComponent } from "./gateway/gateway-new.component";
import { GatewayComponent } from "./gateway/gateway.component";

import { GoalComponent } from './goal/goal.component';
import { GoalNewComponent } from './goal/goal-new.component';
import { GoalDetailComponent } from './goal/goal-detail.component';

import { NotificationComponent } from './notification/notification.component';
import { NotificationNewComponent } from './notification/notification-new.component';
import { NotificationDetailComponent } from './notification/notification-detail.component';

import { OrganisationComponent } from './organisation/organisation.component';
import { OrganisationNewComponent } from './organisation/organisation-new.component';
import { OrganisationDetailComponent } from './organisation/organisation-detail.component';

import { PlantComponent } from './plant/plant.component';
import { PlantNewComponent } from './plant/plant-new.component';
import { PlantDetailComponent } from './plant/plant-detail.component';

import { ReportComponent } from './report/report.component';
import { ReportNewComponent } from './report/report-new.component';
import { ReportDetailComponent } from './report/report-detail.component';

import { TicketComponent } from './ticket/ticket.component';
import { TicketNewComponent } from './ticket/ticket-new.component';
import { TicketDetailComponent } from './ticket/ticket-detail.component';

import { UserComponent } from './user/user.component';
import { UserNewComponent } from './user/user-new.component';
import { UserDetailComponent } from './user/user-detail.component';

import { RouterModule } from "@angular/router";
import { DatabasesRoutes } from "./databases.routing";



let componentList = [
  AccountDetailComponent,
  AccountNewComponent,
  AccountComponent,

  ApplianceDetailComponent,
  ApplianceNewComponent,
  ApplianceComponent,  

  BillDetailComponent,
  BillNewComponent,
  BillComponent,

  BuildingDetailComponent,
  BuildingNewComponent,
  BuildingComponent,

  DeviceDetailComponent,
  DeviceNewComponent,
  DeviceComponent,

  GatewayDetailComponent,
  GatewayNewComponent,
  GatewayComponent,

  GoalComponent,
  GoalNewComponent,
  GoalDetailComponent,

  NotificationComponent,
  NotificationNewComponent,
  NotificationDetailComponent,

  OrganisationComponent,
  OrganisationNewComponent,
  OrganisationDetailComponent,

  PlantComponent,
  PlantNewComponent,
  PlantDetailComponent,

  ReportComponent,
  ReportNewComponent,
  ReportDetailComponent,

  TicketComponent,
  TicketNewComponent,
  TicketDetailComponent,

  UserComponent,
  UserNewComponent,
  UserDetailComponent,  
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
    RouterModule.forChild(DatabasesRoutes)
  ],
  exports: componentList
})
export class DatabasesModule {}
