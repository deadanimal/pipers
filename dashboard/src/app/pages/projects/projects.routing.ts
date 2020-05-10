import { Routes } from "@angular/router";


import { MeetingComponent } from './meeting/meeting.component';
import { MeetingNewComponent } from './meeting/meeting-new.component';
import { MeetingDetailComponent } from './meeting/meeting-detail.component';

import { NoteComponent } from './note/note.component';
import { NoteNewComponent } from './note/note-new.component';
import { NoteDetailComponent } from './note/note-detail.component';




export const ProjectsRoutes: Routes = [
  {
    path: "",
    children: [
   
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
        path: "order",
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
                                      
    ]
  },
];
