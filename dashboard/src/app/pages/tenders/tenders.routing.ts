import { Routes } from "@angular/router";


import { NotificationComponent } from './notification/notification.component';
import { NotificationNewComponent } from './notification/notification-new.component';
import { NotificationDetailComponent } from './notification/notification-detail.component';





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
            path: 'new',
            component: NotificationNewComponent,
          },
          {
            path: ':id',
            component: NotificationDetailComponent,
          },                    
        ]
      },    
      
                          
    ]
  },
];
