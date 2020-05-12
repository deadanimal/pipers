import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { ComponentsModule } from "../../components/components.module";

import { BsDropdownModule } from "ngx-bootstrap";
import { PaginationModule } from "ngx-bootstrap/pagination";
import { ProgressbarModule } from "ngx-bootstrap/progressbar";
import { TooltipModule } from "ngx-bootstrap/tooltip";
import { NgxDatatableModule } from "@swimlane/ngx-datatable";

import { AboutComponent } from './about/about.component';
import { ArtificialComponent } from './artificial/artificial.component';
import { CloudComponent } from './cloud/cloud.component';
import { ContactComponent } from './contact/contact.component';
import { EnterpriseComponent } from './enterprise/enterprise.component';
import { HiringComponent } from './hiring/hiring.component';
import { HomeComponent } from './home/home.component';
import { IotComponent } from './iot/iot.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { TermsComponent } from './terms/terms.component';

import { RouterModule } from "@angular/router";
import { PresentationsRoutes } from "./presentations.routing";
import { RecaptchaModule, RecaptchaFormsModule } from 'ng-recaptcha';


let componentList = [

    AboutComponent,
    ArtificialComponent,
    CloudComponent,
    ContactComponent,
    EnterpriseComponent,
    HiringComponent,
    HomeComponent,
    IotComponent,
    PrivacyComponent,
    TermsComponent,

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
    RouterModule.forChild(PresentationsRoutes),
    RecaptchaModule,
    RecaptchaFormsModule
  ],
  exports: componentList
})
export class PresentationsModule {}
