import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { ComponentsModule } from "../../components/components.module";
import { NgSelectModule } from '@ng-select/ng-select';
import { MomentModule } from 'ngx-moment';

import { BsDropdownModule } from "ngx-bootstrap";
import { PaginationModule } from "ngx-bootstrap/pagination";
import { ProgressbarModule } from "ngx-bootstrap/progressbar";
import { TooltipModule } from "ngx-bootstrap/tooltip";
import { NgxDatatableModule } from "@swimlane/ngx-datatable";

import { NotificationComponent } from './notification/notification.component';
import { NotificationListComponent } from './notification/notification-list.component';
import { NotificationNewComponent } from './notification/notification-new.component';
import { NotificationDetailComponent } from './notification/notification-detail.component';

import { PresentationComponent } from './presentation/presentation.component';
import { PresentationListComponent } from './presentation/presentation-list.component';
import { PresentationNewComponent } from './presentation/presentation-new.component';
import { PresentationDetailComponent } from './presentation/presentation-detail.component';

import { ProposalComponent } from './proposal/proposal.component';
import { ProposalNewComponent } from './proposal/proposal-new.component';
import { ProposalDetailComponent } from './proposal/proposal-detail.component';

import { SubmissionComponent } from './submission/submission.component';
import { SubmissionAnalysisComponent } from './submission/submission-analysis.component';
import { SubmissionListComponent } from './submission/submission-list.component';
import { SubmissionNewComponent } from './submission/submission-new.component';
import { SubmissionDetailComponent } from './submission/submission-detail.component';

import { TaskComponent } from './task/task.component';
import { TaskNewComponent } from './task/task-new.component';
import { TaskDetailComponent } from './task/task-detail.component';

import { VideoComponent } from './video/video.component';
import { VideoNewComponent } from './video/video-new.component';
import { VideoDetailComponent } from './video/video-detail.component';

import { WireframeComponent } from './wireframe/wireframe.component';
import { WireframeNewComponent } from './wireframe/wireframe-new.component';
import { WireframeDetailComponent } from './wireframe/wireframe-detail.component';


import { RouterModule } from "@angular/router";
import { TendersRoutes } from "./tenders.routing";



let componentList = [

  NotificationComponent,
  NotificationNewComponent,
  NotificationListComponent,
  NotificationDetailComponent,

  PresentationComponent,
  PresentationListComponent,
  PresentationNewComponent,
  PresentationDetailComponent,

  ProposalComponent,
  ProposalNewComponent,
  ProposalDetailComponent,

  SubmissionComponent,
  SubmissionAnalysisComponent,
  SubmissionListComponent,
  SubmissionNewComponent,
  SubmissionDetailComponent,

  TaskComponent,
  TaskNewComponent,
  TaskDetailComponent,

  VideoComponent,
  VideoNewComponent,
  VideoDetailComponent,

  WireframeComponent,
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
    RouterModule.forChild(TendersRoutes),
    MomentModule
  ],
  exports: componentList
})
export class TendersModule {}
