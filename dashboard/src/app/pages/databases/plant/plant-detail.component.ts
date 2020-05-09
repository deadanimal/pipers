import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from '@angular/router'
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { first } from 'rxjs/operators';

import { Plant } from '../../../models/plant.model';
import { PlantService } from '../../../services/plant.service';

@Component({
  selector: "app-database-plant-detail",
  templateUrl: "plant-detail.component.html"
})
export class PlantDetailComponent implements OnInit {
  
  plant: Plant;
  _id: string;

  plantForm: any = {};
  loading = false;
  submitted = false;  

  constructor(        
    public route: ActivatedRoute,
    public router: Router,
    private plantService: PlantService) {
  }



  ngOnInit() {

    this._id = this.route.snapshot.params['id'];
    this.plant = this.plantService.plant;

    if (!this.plant) {
      this.getSpecificPlant(this._id)
    } else {
      this.plantForm = this.plant;
    }

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

  getSpecificPlant(_id) {
    this.plantService.getPlant(_id).subscribe(
      (data) => {
        this.plant = data
      }, (error) => {

      }, () => {

      }
    )
  }

  onSubmit() {
    console.log(this.plantForm);

    const formData = new FormData();
    formData.append('name', this.plantForm.name);  
    formData.append('label', this.plantForm.label);    

    this.plantService.updatePlant(this._id,this.plantForm).subscribe(
      (data: any) => {
        console.log(data);
        this.plantService.plant = data;
        this.plant = this.plantService.plant;
      },
      (error) => {
        console.log(error);
      },
      () => {
        this.router.navigateByUrl('/databases/plant')
      }
    )        
  }




}
