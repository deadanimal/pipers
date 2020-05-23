import { Routes } from "@angular/router";


import { CampaignComponent } from './campaign/campaign.component';
import { CampaignNewComponent } from './campaign/campaign-new.component';
import { CampaignDetailComponent } from './campaign/campaign-detail.component';

import { ContactComponent } from './contact/contact.component';
import { ContactNewComponent } from './contact/contact-new.component';
import { ContactDetailComponent } from './contact/contact-detail.component';

import { InvoiceComponent } from './invoice/invoice.component';
import { InvoiceNewComponent } from './invoice/invoice-new.component';
import { InvoiceDetailComponent } from './invoice/invoice-detail.component';

import { MeetingComponent } from './meeting/meeting.component';
import { MeetingNewComponent } from './meeting/meeting-new.component';
import { MeetingDetailComponent } from './meeting/meeting-detail.component';

import { QuotationComponent } from './quotation/quotation.component';
import { QuotationNewComponent } from './quotation/quotation-new.component';
import { QuotationDetailComponent } from './quotation/quotation-detail.component';



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
      
      {
        path: "contact",
        children: [
          {
            path: '',
            component: ContactComponent,
          },
          {
            path: 'new',
            component: ContactNewComponent,
          },
          {
            path: ':id',
            component: ContactDetailComponent,
          },                    
        ]
      },  
      
      {
        path: "invoice",
        children: [
          {
            path: '',
            component: InvoiceComponent,
          },
          {
            path: 'new',
            component: InvoiceNewComponent,
          },
          {
            path: ':id',
            component: InvoiceDetailComponent,
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
        path: "quotation",
        children: [
          {
            path: '',
            component: QuotationComponent,
          },
          {
            path: 'new',
            component: QuotationNewComponent,
          },
          {
            path: ':id',
            component: QuotationDetailComponent,
          },                    
        ]
      },    
                 
    ]
  },
];
