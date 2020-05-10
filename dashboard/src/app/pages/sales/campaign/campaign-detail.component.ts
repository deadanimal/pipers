import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from '@angular/router'
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { first } from 'rxjs/operators';

import { Campaign } from '../../../models/campaign.model';
import { CampaignService } from '../../../services/campaign.service';

@Component({
  selector: "app-project-campaign-detail",
  templateUrl: "campaign-detail.component.html"
})
export class CampaignDetailComponent implements OnInit {
  
  campaign: Campaign;
  _id: string;

  campaignForm: any = {};
  loading = false;
  submitted = false;  

  constructor(        
    public route: ActivatedRoute,
    public router: Router,
    private campaignService: CampaignService) {
  }



  ngOnInit() {

    this._id = this.route.snapshot.params['id'];
    this.campaign = this.campaignService.campaign;

    if (!this.campaign) {
      this.getSpecificCampaign(this._id)
    } else {
      this.campaignForm = this.campaign;
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

  getSpecificCampaign(_id) {
    this.campaignService.getCampaign(_id).subscribe(
      (data) => {
        this.campaign = data
      }, (error) => {

      }, () => {

      }
    )
  }

  onSubmit() {
    console.log(this.campaignForm);

    const formData = new FormData();
    formData.append('name', this.campaignForm.name);  
    formData.append('label', this.campaignForm.label);    

    this.campaignService.updateCampaign(this._id,this.campaignForm).subscribe(
      (data: any) => {
        console.log(data);
        this.campaignService.campaign = data;
        this.campaign = this.campaignService.campaign;
      },
      (error) => {
        console.log(error);
      },
      () => {
        this.router.navigateByUrl('/sales/campaign')
      }
    )        
  }




}
