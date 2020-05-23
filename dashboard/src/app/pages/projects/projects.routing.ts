import { Routes } from "@angular/router";


import { DocumentComponent } from './document/document.component';
import { DocumentNewComponent } from './document/document-new.component';
import { DocumentDetailComponent } from './document/document-detail.component';

import { MeetingComponent } from './meeting/meeting.component';
import { MeetingNewComponent } from './meeting/meeting-new.component';
import { MeetingDetailComponent } from './meeting/meeting-detail.component';

import { MilestoneComponent } from './milestone/milestone.component';
import { MilestoneNewComponent } from './milestone/milestone-new.component';
import { MilestoneDetailComponent } from './milestone/milestone-detail.component';

import { NoteComponent } from './note/note.component';
import { NoteNewComponent } from './note/note-new.component';
import { NoteDetailComponent } from './note/note-detail.component';

import { TrainingComponent } from './training/training.component';
import { TrainingNewComponent } from './training/training-new.component';
import { TrainingDetailComponent } from './training/training-detail.component';




export const ProjectsRoutes: Routes = [
  {
    path: "",
    children: [
   
      {
        path: "document",
        children: [
          {
            path: '',
            component: DocumentComponent,
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
        path: "meeting",
        children: [
          {
            path: '',
            component: MeetingComponent,
          },
          {
            path: 'new',
            component: MeetingNewComponent,
          },
          {
            path: ':id',
            component: MeetingDetailComponent,
          },                    
        ]
      },
      
      {
        path: "milestone",
        children: [
          {
            path: '',
            component: MilestoneComponent,
          },
          {
            path: 'new',
            component: MilestoneNewComponent,
          },
          {
            path: ':id',
            component: MilestoneDetailComponent,
          },                    
        ]
      },     
      
      {
        path: "note",
        children: [
          {
            path: '',
            component: NoteComponent,
          },
          {
            path: 'new',
            component: NoteNewComponent,
          },
          {
            path: ':id',
            component: NoteDetailComponent,
          },                    
        ]
      }, 
      
      {
        path: "training",
        children: [
          {
            path: '',
            component: TrainingComponent,
          },
          {
            path: 'new',
            component: TrainingNewComponent,
          },
          {
            path: ':id',
            component: TrainingDetailComponent,
          },                    
        ]
      },       
    ]
  },
];
