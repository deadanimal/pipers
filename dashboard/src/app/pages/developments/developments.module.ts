import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { ComponentsModule } from "../../components/components.module";

import { BsDropdownModule } from "ngx-bootstrap";
import { PaginationModule } from "ngx-bootstrap/pagination";
import { ProgressbarModule } from "ngx-bootstrap/progressbar";
import { TooltipModule } from "ngx-bootstrap/tooltip";
import { NgxDatatableModule } from "@swimlane/ngx-datatable";

import { CommitComponent } from './commit/commit.component';
import { CommitListComponent} from './commit/commit-list.component';
import { CommitNewComponent } from './commit/commit-new.component';
import { CommitDetailComponent } from './commit/commit-detail.component';

import { DeploymentComponent } from './deployment/deployment.component';
import { DeploymentListComponent } from './deployment/deployment-list.component';
import { DeploymentNewComponent } from './deployment/deployment-new.component';
import { DeploymentDetailComponent } from './deployment/deployment-detail.component';

import { DiagramComponent } from './diagram/diagram.component';
import { DiagramListComponent } from './diagram/diagram-list.component';
import { DiagramNewComponent } from './diagram/diagram-new.component';
import { DiagramDetailComponent } from './diagram/diagram-detail.component';

import { DocumentComponent } from './document/document.component';
import { DocumentListComponent } from './document/document-list.component';
import { DocumentNewComponent } from './document/document-new.component';
import { DocumentDetailComponent } from './document/document-detail.component';

import { MaintenanceComponent } from './maintenance/maintenance.component';
import { MaintenanceListComponent } from './maintenance/maintenance-list.component';
import { MaintenanceNewComponent } from './maintenance/maintenance-new.component';
import { MaintenanceDetailComponent } from './maintenance/maintenance-detail.component';

import { WireframeComponent } from './wireframe/wireframe.component';
import { WireframeListComponent } from './wireframe/wireframe-list.component';
import { WireframeNewComponent } from './wireframe/wireframe-new.component';
import { WireframeDetailComponent } from './wireframe/wireframe-detail.component';

import { RouterModule } from "@angular/router";
import { DevelopmentsRoutes } from "./developments.routing";
import { NgSelectModule } from '@ng-select/ng-select';


let componentList = [

    CommitComponent,
    CommitListComponent,
    CommitNewComponent,
    CommitDetailComponent,

    DeploymentComponent,
    DeploymentListComponent,
    DeploymentNewComponent,
    DeploymentDetailComponent,

    DiagramComponent,
    DiagramListComponent,
    DiagramNewComponent,
    DiagramDetailComponent,  

    DocumentComponent,
    DocumentListComponent,
    DocumentNewComponent,
    DocumentDetailComponent,      

    MaintenanceComponent,
    MaintenanceListComponent,
    MaintenanceNewComponent,
    MaintenanceDetailComponent,

    WireframeComponent,
    WireframeListComponent,
    WireframeNewComponent,
    WireframeDetailComponent,

]

@NgModule({
  declarations: componentList,
  imports: [
    CommonModule,
    ComponentsModule,
    FormsModule,
    NgxDatatableModule,
    NgSelectModule,
    BsDropdownModule.forRoot(),
    PaginationModule.forRoot(),
    ProgressbarModule.forRoot(),
    TooltipModule.forRoot(),
    RouterModule.forChild(DevelopmentsRoutes)
  ],
  exports: componentList
})
export class DevelopmentsModule {}

/*
import { ApiComponent } from './api/api.component';
import { ApiNewComponent } from './api/api-new.component';
import { ApiDetailComponent } from './api/api-detail.component';

import { DatatableComponent } from './datatable/datatable.component';
import { DatatableNewComponent } from './datatable/datatable-new.component';
import { DatatableDetailComponent } from './datatable/datatable-detail.component';

import { FlowComponent } from './flow/flow.component';
import { FlowNewComponent } from './flow/flow-new.component';
import { FlowDetailComponent } from './flow/flow-detail.component';


import { MobileappComponent } from './mobileapp/mobileapp.component';
import { MobileappNewComponent } from './mobileapp/mobileapp-new.component';
import { MobileappDetailComponent } from './mobileapp/mobileapp-detail.component';

import { OverviewComponent } from './overview/overview.component';

import { PrototypeComponent } from './prototype/prototype.component';
import { PrototypeNewComponent } from './prototype/prototype-new.component';
import { PrototypeDetailComponent } from './prototype/prototype-detail.component';

import { WebappComponent } from './webapp/webapp.component';
import { WebappNewComponent } from './webapp/webapp-new.component';
import { WebappDetailComponent } from './webapp/webapp-detail.component';
*/