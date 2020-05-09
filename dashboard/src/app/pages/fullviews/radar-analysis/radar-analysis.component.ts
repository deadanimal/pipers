import { Component, OnInit } from "@angular/core";
import { Location } from '@angular/common';


@Component({
  selector: "app-fullview-radar-analysis",
  templateUrl: "./radar-analysis.component.html",
  styleUrls: ["./radar-analysis.component.scss"]
})
export class RadarAnalysisComponent implements OnInit {
  test: Date = new Date();
  isCollapsed = true;
  
  constructor(private _location: Location) {}

  ngOnInit() {}

  backClicked() {
    this._location.back();
  }
}
