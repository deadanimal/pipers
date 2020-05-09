import { Component, OnInit } from "@angular/core";
import { Location } from '@angular/common';


@Component({
  selector: "app-fullview-radar-activeradar",
  templateUrl: "./radar-activeradar.component.html",
  styleUrls: ["./radar-activeradar.component.scss"]
})
export class RadarActiveradarComponent implements OnInit {
  test: Date = new Date();
  isCollapsed = true;
  
  constructor(private _location: Location) {}

  ngOnInit() {}

  backClicked() {
    this._location.back();
  }
}
