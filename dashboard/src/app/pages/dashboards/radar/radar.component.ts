import { Component, OnInit, OnDestroy } from "@angular/core";
import { Router } from '@angular/router';

import * as L from 'leaflet';
import { latLng, tileLayer } from 'leaflet';
import { Map as LeafletMap} from 'leaflet';

@Component({
  selector: "app-dasboard-radar",
  templateUrl: "radar.component.html",

})
export class RadarComponent implements OnInit, OnDestroy {

  public map: LeafletMap;
  public roadMap;
  public hybridMap;  
  public leafletOptions;

  constructor(public router: Router) {}

  ngOnInit() {

    this.initialiseMap();

    var navbar = document.getElementsByClassName("navbar-top")[0];
    navbar.classList.add("bg-secondary");
    navbar.classList.add("navbar-light");
    navbar.classList.remove("bg-danger");
    navbar.classList.remove("navbar-dark");

    var navbarSearch = document.getElementsByClassName("navbar-search")[0];
    navbarSearch.classList.add("navbar-search-dark");
    navbarSearch.classList.remove("navbar-search-light");
  }

  ngOnDestroy() {
    var navbar = document.getElementsByClassName("navbar-top")[0];
    navbar.classList.remove("bg-secondary");
    navbar.classList.remove("navbar-light");
    navbar.classList.add("bg-danger");
    navbar.classList.add("navbar-dark");

    var navbarSearch = document.getElementsByClassName("navbar-search")[0];
    navbarSearch.classList.remove("navbar-search-dark");
    navbarSearch.classList.add("navbar-search-light");
  }

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

  moveTo(link) {

    if (link == 'live_view') {
      this.router.navigateByUrl('/fullviews/radar/liveview')
    } else if (link == 'active_radar') {
      this.router.navigateByUrl('/fullviews/radar/activeradar')
    } else if (link == 'analysis') {
      this.router.navigateByUrl('/fullviews/radar/analysis')
    } else {

      let url_string = '/dashboards'
      this.router.navigateByUrl(url_string)
    }

  }  

}
