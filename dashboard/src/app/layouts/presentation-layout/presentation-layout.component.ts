import { Component, OnInit, HostListener } from "@angular/core";

@Component({
  selector: "app-presentation-layout",
  templateUrl: "./presentation-layout.component.html",
  styleUrls: ["./presentation-layout.component.scss"]
})
export class PresentationLayoutComponent implements OnInit {
  isMobileResolution: boolean;
  test: Date = new Date();

  constructor() {
    if (window.innerWidth < 1200) {
      this.isMobileResolution = true;
    } else {
      this.isMobileResolution = false;
    }
  }
  @HostListener("window:resize", ["$event"])
  isMobile(event) {
    if (window.innerWidth < 1200) {
      this.isMobileResolution = true;
    } else {
      this.isMobileResolution = false;
    }
  }
  ngOnInit() {}
}
