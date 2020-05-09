import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from '@angular/router'
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { first } from 'rxjs/operators';

import * as L from 'leaflet';
import { latLng, tileLayer } from 'leaflet';
import { Map as LeafletMap} from 'leaflet';

import { Building } from '../../../models/building.model';
import { BuildingService } from '../../../services/building.service';

@Component({
  selector: "app-database-building-detail",
  templateUrl: "building-detail.component.html"
})
export class BuildingDetailComponent implements OnInit {
  
  building: Building;
  _id: string;

  public map: LeafletMap;

  buildingForm: any = {};
  loading = false;
  submitted = false;  

  constructor(        
    public route: ActivatedRoute,
    public router: Router,
    private buildingService: BuildingService) {
  }



  ngOnInit() {

    this._id = this.route.snapshot.params['id'];
    this.building = this.buildingService.building;

    if (!this.building) {
      this.getSpecificBuilding(this._id)
    } else {
      this.buildingForm = this.building;
    }

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

  getSpecificBuilding(_id) {
    this.buildingService.getBuilding(_id).subscribe(
      (data) => {
        this.building = data
      }, (error) => {

      }, () => {

      }
    )
  }

  onSubmit() {
    console.log(this.buildingForm);

    const formData = new FormData();
    formData.append('name', this.buildingForm.name);  
    formData.append('label', this.buildingForm.label);    

    this.buildingService.updateBuilding(this._id,this.buildingForm).subscribe(
      (data: any) => {
        console.log(data);
        this.buildingService.building = data;
        this.building = this.buildingService.building;
      },
      (error) => {
        console.log(error);
      },
      () => {
        this.router.navigateByUrl('/databases/building')
      }
    )        
  }

  initialiseMap() {
  
    this.map = L.map("map").setView(latLng([ 4.105369348495166, 102.315673828125 ]), 7);
     L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {}).addTo(this.map);    
   }


}
