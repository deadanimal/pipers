import { Component, OnInit } from "@angular/core";
import { Location } from '@angular/common';


@Component({
  selector: "app-fullview-core-launchpad",
  templateUrl: "./core-launchpad.component.html",
  styleUrls: ["./core-launchpad.component.scss"]
})
export class CoreLaunchpadComponent implements OnInit {
  test: Date = new Date();
  isCollapsed = true;
  
  constructor(private _location: Location) {}

  ngOnInit() {}

  backClicked() {
    this._location.back();
  }
}
