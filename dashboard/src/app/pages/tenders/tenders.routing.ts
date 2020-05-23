import { Routes } from "@angular/router";


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

export const TendersRoutes: Routes = [
  {
    path: "",
    children: [
   
      {
        path: "notification",
        children: [
          {
            path: '',
            component: NotificationComponent,
          },
          {
            path: 'list',
            component: NotificationListComponent,
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
        path: "presentation",
        children: [
          {
            path: '',
            component: PresentationComponent,
          },
          {
            path: 'list',
            component: PresentationListComponent,
          },            
          {
            path: 'new',
            component: PresentationNewComponent,
          },
          {
            path: ':id',
            component: PresentationDetailComponent,
          },                    
        ]
      },    
      
      {
        path: "proposal",
        children: [
          {
            path: '',
            component: ProposalComponent,
          },        
          {
            path: 'new',
            component: ProposalNewComponent,
          },
          {
            path: ':id',
            component: ProposalDetailComponent,
          },                    
        ]
      },   
      
      {
        path: "submission",
        children: [
          {
            path: '',
            component: SubmissionComponent,
          },
          {
            path: 'analysis',
            component: SubmissionAnalysisComponent,
          },
          {
            path: 'list',
            component: SubmissionListComponent,
          },                    
          {
            path: 'new',
            component: SubmissionNewComponent,
          },
          {
            path: ':id',
            component: SubmissionDetailComponent,
          },                    
        ]
      },       
      
      {
        path: "task",
        children: [
          {
            path: '',
            component: TaskComponent,
          },
          {
            path: 'new',
            component: TaskNewComponent,
          },
          {
            path: ':id',
            component: TaskDetailComponent,
          },                    
        ]
      },   

      {
        path: "video",
        children: [
          {
            path: '',
            component: VideoComponent,
          },
          {
            path: 'new',
            component: VideoNewComponent,
          },
          {
            path: ':id',
            component: VideoDetailComponent,
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
