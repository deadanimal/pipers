import { Routes } from "@angular/router";


import { CommitComponent } from './commit/commit.component';
import { CommitListComponent } from './commit/commit-list.component';
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





export const DevelopmentsRoutes: Routes = [
  {
    path: "",
    children: [

      {
        path: "commit",
        children: [
          {
            path: '',
            component: CommitComponent,
          },
          {
            path: 'list',
            component: CommitListComponent,
          }, 
          {
            path: 'new',
            component: CommitNewComponent,
          },
          {
            path: ':id',
            component: CommitDetailComponent,
          },                    
        ]
      },        
  
      {
        path: "deployment",
        children: [
          {
            path: '',
            component: DeploymentComponent,
          },

          {
            path: 'list',
            component: DeploymentListComponent,
          },          
          {
            path: 'new',
            component: DeploymentNewComponent,
          },
          {
            path: ':id',
            component: DeploymentDetailComponent,
          },                    
        ]
      },   
      
      {
        path: "diagram",
        children: [
          {
            path: '',
            component: DiagramComponent,
          },
          {
            path: 'list',
            component: DiagramListComponent,
          },           
          {
            path: 'new',
            component: DiagramNewComponent,
          },
          {
            path: ':id',
            component: DiagramDetailComponent,
          },                    
        ]
      },  

      {
        path: "document",
        children: [
          {
            path: '',
            component: DocumentComponent,
          },
          {
            path: 'list',
            component: DocumentListComponent,
          }, 
          {
            path: 'new',
            component: DocumentNewComponent,
          },
          {
            path: ':id',
            component: DocumentDetailComponent,
          },                    
        ]
      },               
      
      {
        path: "maintenance",
        children: [
          {
            path: '',
            component: MaintenanceComponent,
          },
          {
            path: 'list',
            component: MaintenanceListComponent,
          },          
          {
            path: 'new',
            component: MaintenanceNewComponent,
          },
          {
            path: ':id',
            component: MaintenanceDetailComponent,
          },                    
        ]
      },    

      {
        path: "wireframe",
        children: [
          {
            path: '',
            component: WireframeComponent,
          },
          {
            path: 'list',
            component: WireframeListComponent,
          },          
          {
            path: 'new',
            component: WireframeNewComponent,
          },
          {
            path: ':id',
            component: WireframeDetailComponent,
          },                    
        ]
      },       
        
    ]
  },
];


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