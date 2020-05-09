import { Component, OnInit } from "@angular/core";
import { Location } from '@angular/common';


@Component({
  selector: "app-fullview-core-component",
  templateUrl: "./core-component.component.html",
  styleUrls: ["./core-component.component.scss"]
})
export class CoreComponentComponent implements OnInit {
  test: Date = new Date();
  isCollapsed = true;
  
  constructor(private _location: Location) {}

  ngOnInit() {}

  backClicked() {
    this._location.back();
  }
}
