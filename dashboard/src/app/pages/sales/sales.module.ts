import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { ComponentsModule } from "../../components/components.module";

import { BsDropdownModule } from "ngx-bootstrap";
import { PaginationModule } from "ngx-bootstrap/pagination";
import { ProgressbarModule } from "ngx-bootstrap/progressbar";
import { TooltipModule } from "ngx-bootstrap/tooltip";
import { NgxDatatableModule } from "@swimlane/ngx-datatable";

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

import { RouterModule } from "@angular/router";
import { SalesRoutes } from "./sales.routing";


let componentList = [

  CampaignComponent,
  CampaignNewComponent,
  CampaignDetailComponent,

  ContactComponent,
  ContactNewComponent,
  ContactDetailComponent,
  
  InvoiceComponent,
  InvoiceNewComponent,
  InvoiceDetailComponent,
  
  MeetingComponent,
  MeetingNewComponent,
  MeetingDetailComponent,

  QuotationComponent,
  QuotationNewComponent,
  QuotationDetailComponent,

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
    RouterModule.forChild(SalesRoutes)
  ],
  exports: componentList
})
export class SalesModule {}
