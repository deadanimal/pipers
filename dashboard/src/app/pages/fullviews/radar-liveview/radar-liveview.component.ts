import { Component, OnInit } from "@angular/core";
import { Location } from '@angular/common';

import * as L from 'leaflet';
import { latLng, tileLayer } from 'leaflet';
import { Map as LeafletMap} from 'leaflet';

@Component({
  selector: "app-fullview-radar-liveview",
  templateUrl: "./radar-liveview.component.html",
  styleUrls: ["./radar-liveview.component.scss"]
})
export class RadarLiveviewComponent implements OnInit {
  test: Date = new Date();
  isCollapsed = true;
  
  public map: LeafletMap;
  public roadMap;
  public hybridMap;  
  public leafletOptions;

  constructor(private _location: Location) {}

  ngOnInit() {

    this.initialiseMap();

  }

  ngOnDestroy() {}

  initialiseMap() {
  
   this.map = L.map("map").setView(latLng([ 4.105369348495166, 102.315673828125 ]), 7);
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {}).addTo(this.map);    
  }

  onMapReady(map: LeafletMap) {   

    console.log('done')

    this.map = map;

    let roadMap = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
      maxZoom: 20,
      subdomains: ['a', 'b', 'c'],
      detectRetina: true
    })

    let hybridMap = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
      maxZoom: 16,
      subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
      detectRetina: true
    })

    this.leafletOptions = {
      layers: [roadMap],
      fullscreenControl: false,
      //zoomControl:false, 
      zoom: 7,
      minZoom: 4,
      maxZoom: 18,
      center: latLng([ 4.105369348495166, 102.315673828125 ])
    };    
    
    this.roadMap = roadMap;
    this.hybridMap = hybridMap;    

    var baseLayers = {
      "Road": this.roadMap,
      "Satellite": this.hybridMap
    };

    L.control.layers(baseLayers).addTo(this.map);    
  }



  backClicked() {
    this._location.back();
  }
}
