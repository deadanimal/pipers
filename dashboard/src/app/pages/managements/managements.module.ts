import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { ComponentsModule } from "../../components/components.module";

import { BsDropdownModule } from "ngx-bootstrap";
import { PaginationModule } from "ngx-bootstrap/pagination";
import { ProgressbarModule } from "ngx-bootstrap/progressbar";
import { TooltipModule } from "ngx-bootstrap/tooltip";
import { NgxDatatableModule } from "@swimlane/ngx-datatable";

import { OrganisationComponent } from './organisation/organisation.component';
import { OrganisationNewComponent } from './organisation/organisation-new.component';
import { OrganisationDetailComponent } from './organisation/organisation-detail.component';

import { ProjectComponent } from './project/project.component';
import { ProjectNewComponent } from './project/project-new.component';
import { ProjectDetailComponent } from './project/project-detail.component';

import { UserComponent } from './user/user.component';
import { UserNewComponent } from './user/user-new.component';
import { UserDetailComponent } from './user/user-detail.component';


import { RouterModule } from "@angular/router";
import { ManagementsRoutes } from "./managements.routing";


let componentList = [

  OrganisationComponent,
  OrganisationNewComponent,
  OrganisationDetailComponent,  

  ProjectComponent,
  ProjectNewComponent,
  ProjectDetailComponent,

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
    RouterModule.forChild(ManagementsRoutes)
  ],
  exports: componentList
})
export class ManagementsModule {}
