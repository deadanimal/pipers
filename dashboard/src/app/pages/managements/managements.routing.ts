import { Routes } from "@angular/router";


import { OrganisationComponent } from './organisation/organisation.component';
import { OrganisationNewComponent } from './organisation/organisation-new.component';
import { OrganisationDetailComponent } from './organisation/organisation-detail.component';

import { ProjectComponent } from './project/project.component';
import { ProjectNewComponent } from './project/project-new.component';
import { ProjectDetailComponent } from './project/project-detail.component';

import { UserComponent } from './user/user.component';
import { UserNewComponent } from './user/user-new.component';
import { UserDetailComponent } from './user/user-detail.component';



export const ManagementsRoutes: Routes = [
  {
    path: "",
    children: [

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
        path: "project",
        children: [
          {
            path: '',
            component: ProjectComponent,
          },
          {
            path: 'new',
            component: ProjectNewComponent,
          },
          {
            path: ':id',
            component: ProjectDetailComponent,
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
