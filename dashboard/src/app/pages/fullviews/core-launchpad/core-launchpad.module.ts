import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TooltipModule } from "ngx-bootstrap/tooltip";
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CollapseModule } from 'ngx-bootstrap/collapse';

import { RouterModule } from "@angular/router";
import { CoreLaunchpadComponent } from "./core-launchpad.component";

@NgModule({
  declarations: [CoreLaunchpadComponent],
  imports: [CommonModule, RouterModule, TooltipModule.forRoot(), BsDropdownModule.forRoot(), CollapseModule.forRoot()]
})
export class CoreLaunchpadModule {}
