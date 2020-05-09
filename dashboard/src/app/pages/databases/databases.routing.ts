import { Routes } from "@angular/router";

import { AccountDetailComponent } from './account/account-detail.component';
import { AccountNewComponent } from './account/account-new.component';
import { AccountComponent } from "./account/account.component";
import { ApplianceComponent } from './appliance/appliance.component';
import { ApplianceNewComponent } from './appliance/appliance-new.component';
import { ApplianceDetailComponent } from './appliance/appliance-detail.component';
import { BillComponent } from './bill/bill.component';
import { BillNewComponent } from './bill/bill-new.component';
import { BillDetailComponent } from './bill/bill-detail.component';
import { BuildingComponent } from './building/building.component';
import { BuildingNewComponent } from './building/building-new.component';
import { BuildingDetailComponent } from './building/building-detail.component';
import { DeviceComponent } from './device/device.component';
import { DeviceNewComponent } from './device/device-new.component';
import { DeviceDetailComponent } from './device/device-detail.component';
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


export const DatabasesRoutes: Routes = [
  {
    path: "",
    children: [
      {
        path: "account",
        children: [
          {
            path: '',
            component: AccountComponent,
          },
          {
            path: 'new',
            component: AccountNewComponent,
          },
          {
            path: ':id',
            component: AccountDetailComponent,
          },                    
        ]
      },    
      {
        path: "appliance",
        children: [
          {
            path: '',
            component: ApplianceComponent,
          },
          {
            path: 'new',
            component: ApplianceNewComponent,
          },
          {
            path: ':id',
            component: ApplianceDetailComponent,
          },                    
        ]
      },      
      {
        path: "bill",
        children: [
          {
            path: '',
            component: BillComponent,
          },
          {
            path: 'new',
            component: BillNewComponent,
          },
          {
            path: ':id',
            component: BillDetailComponent,
          },                    
        ]
      },       
      {
        path: "building",
        children: [
          {
            path: '',
            component: BuildingComponent,
          },
          {
            path: 'new',
            component: BuildingNewComponent,
          },
          {
            path: ':id',
            component: BuildingDetailComponent,
          },                    
        ]
      },       
      {
        path: "device",
        children: [
          {
            path: '',
            component: DeviceComponent,
          },
          {
            path: 'new',
            component: DeviceNewComponent,
          },
          {
            path: ':id',
            component: DeviceDetailComponent,
          },                    
        ]
      },                                
      {
        path: "gateway",
        children: [
          {
            path: '',
            component: GatewayComponent,
          },
          {
            path: 'new',
            component: GatewayNewComponent,
          },
          {
            path: ':id',
            component: GatewayDetailComponent,
          },                    
        ]
      },      
      {
        path: "goal",
        children: [
          {
            path: '',
            component: GoalComponent,
          },
          {
            path: 'new',
            component: GoalNewComponent,
          },
          {
            path: ':id',
            component: GoalDetailComponent,
          },                    
        ]
      },   
      {
        path: "notification",
        children: [
          {
            path: '',
            component: NotificationComponent,
          },
          {
            path: 'new',
            component: NotificationNewComponent,
          },
          {
            path: ':id',
            component: NotificationDetailComponent,
          },                    
        ]
      },   
      {
        path: "organisation",
        children: [
          {
            path: '',
            component: OrganisationComponent,
          },
          {
            path: 'new',
            component: OrganisationNewComponent,
          },
          {
            path: ':id',
            component: OrganisationDetailComponent,
          },                    
        ]
      },    
      {
        path: "plant",
        children: [
          {
            path: '',
            component: PlantComponent,
          },
          {
            path: 'new',
            component: PlantNewComponent,
          },
          {
            path: ':id',
            component: PlantDetailComponent,
          },                    
        ]
      },  
      {
        path: "report",
        children: [
          {
            path: '',
            component: ReportComponent,
          },
          {
            path: 'new',
            component: ReportNewComponent,
          },
          {
            path: ':id',
            component: ReportDetailComponent,
          },                    
        ]
      },   
      {
        path: "ticket",
        children: [
          {
            path: '',
            component: TicketComponent,
          },
          {
            path: 'new',
            component: TicketNewComponent,
          },
          {
            path: ':id',
            component: TicketDetailComponent,
          },                    
        ]
      },       
      {
        path: "user",
        children: [
          {
            path: '',
            component: UserComponent,
          },
          {
            path: 'new',
            component: UserNewComponent,
          },
          {
            path: ':id',
            component: UserDetailComponent,
          },                    
        ]
      },                                         
    ]
  },
];
