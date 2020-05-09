import { Component, OnInit } from "@angular/core";
import { Location } from '@angular/common';


@Component({
  selector: "app-fullview-core-freehand",
  templateUrl: "./core-freehand.component.html",
  styleUrls: ["./core-freehand.component.scss"]
})
export class CoreFreehandComponent implements OnInit {
  test: Date = new Date();
  isCollapsed = true;
  
  constructor(private _location: Location) {}

  ngOnInit() {}

  backClicked() {
    this._location.back();
  }
}
