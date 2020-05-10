import { Routes } from "@angular/router";


import { TicketComponent } from './ticket/ticket.component';
import { TicketNewComponent } from './ticket/ticket-new.component';
import { TicketDetailComponent } from './ticket/ticket-detail.component';


export const SupportsRoutes: Routes = [
  {
    path: "",
    children: [

      {
        path: "ticket",
        children: [
          {
            path: '',
            component: TicketComponent,
          },
          {
            path: 'new',
            component: TicketNewComponent,
          },
          {
            path: ':id',
            component: TicketDetailComponent,
          },                    
        ]
      },    
        
                                      
    ]
  },
];
