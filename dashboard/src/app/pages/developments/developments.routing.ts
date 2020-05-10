import { Routes } from "@angular/router";


import { FlowComponent } from './flow/flow.component';
import { FlowNewComponent } from './flow/flow-new.component';
import { FlowDetailComponent } from './flow/flow-detail.component';





export const DevelopmentsRoutes: Routes = [
  {
    path: "",
    children: [
   
      {
        path: "flow",
        children: [
          {
            path: '',
            component: FlowComponent,
          },
          {
            path: 'new',
            component: FlowNewComponent,
          },
          {
            path: ':id',
            component: FlowDetailComponent,
          },                    
        ]
      },    
      
                          
    ]
  },
];
