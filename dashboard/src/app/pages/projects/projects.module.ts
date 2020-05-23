import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { ComponentsModule } from "../../components/components.module";

import { BsDropdownModule } from "ngx-bootstrap";
import { PaginationModule } from "ngx-bootstrap/pagination";
import { ProgressbarModule } from "ngx-bootstrap/progressbar";
import { TooltipModule } from "ngx-bootstrap/tooltip";
import { NgxDatatableModule } from "@swimlane/ngx-datatable";

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


import { RouterModule } from "@angular/router";
import { ProjectsRoutes } from "./projects.routing";


let componentList = [

  DocumentComponent,
  DocumentNewComponent,
  DocumentDetailComponent,

  MeetingComponent,
  MeetingNewComponent,
  MeetingDetailComponent,

  MilestoneComponent,
  MilestoneNewComponent,
  MilestoneDetailComponent,

  NoteComponent,
  NoteNewComponent,
  NoteDetailComponent,

  TrainingComponent,
  TrainingNewComponent,
  TrainingDetailComponent,

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
    RouterModule.forChild(ProjectsRoutes)
  ],
  exports: componentList
})
export class ProjectsModule {}
