import { Routes } from "@angular/router";


import { CampaignComponent } from './campaign/campaign.component';
import { CampaignNewComponent } from './campaign/campaign-new.component';
import { CampaignDetailComponent } from './campaign/campaign-detail.component';





export const SalesRoutes: Routes = [
  {
    path: "",
    children: [
   
      {
        path: "campaign",
        children: [
          {
            path: '',
            component: CampaignComponent,
          },
          {
            path: 'new',
            component: CampaignNewComponent,
          },
          {
            path: ':id',
            component: CampaignDetailComponent,
          },                    
        ]
      },    
      
                          
    ]
  },
];
