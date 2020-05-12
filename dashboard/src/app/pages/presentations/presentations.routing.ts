import { Routes } from "@angular/router";

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

export const PresentationsRoutes: Routes = [
  {
    path: "",
    children: [

      {
        path: "about",
        component: AboutComponent
      },     
      
      {
        path: "ai",
        component: ArtificialComponent
      }, 
      
      {
        path: "cloud",
        component: CloudComponent
      },        

      {
        path: "contact",
        component: ContactComponent
      },

      {
        path: "enterprise",
        component: EnterpriseComponent
      },        
      
      {
        path: "hiring",
        component: HiringComponent
      },        
   
      {
        path: "home",
        component: HomeComponent
      },   
      
      {
        path: "iot",
        component: IotComponent
      },        
      
      {
        path: "privacy",
        component: PrivacyComponent
      },  
      
      {
        path: "terms",
        component: TermsComponent
      },        
      
      {
        path: "**",
        redirectTo: "home"
      }      
        
                                      
    ]
  },
];
