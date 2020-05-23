import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from '@angular/router'
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { first } from 'rxjs/operators';

import { Proposal } from '../../../models/proposal.model';
import { ProposalService } from '../../../services/proposal.service';

@Component({
  selector: "app-project-proposal-detail",
  templateUrl: "proposal-detail.component.html"
})
export class ProposalDetailComponent implements OnInit {
  
  proposal: Proposal;
  _id: string;

  proposalForm: any = {};
  loading = false;
  submitted = false;  

  constructor(        
    public route: ActivatedRoute,
    public router: Router,
    private proposalService: ProposalService) {
  }



  ngOnInit() {

    this._id = this.route.snapshot.params['id'];
    this.proposal = this.proposalService.proposal;

    if (!this.proposal) {
      this.getSpecificProposal(this._id)
    } else {
      this.proposalForm = this.proposal;
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

  getSpecificProposal(_id) {
    this.proposalService.getProposal(_id).subscribe(
      (data) => {
        this.proposal = data
      }, (error) => {

      }, () => {

      }
    )
  }

  onSubmit() {
    console.log(this.proposalForm);

    const formData = new FormData();
    formData.append('name', this.proposalForm.name);  
    formData.append('label', this.proposalForm.label);    

    this.proposalService.updateProposal(this._id,this.proposalForm).subscribe(
      (data: any) => {
        console.log(data);
        this.proposalService.proposal = data;
        this.proposal = this.proposalService.proposal;
      },
      (error) => {
        console.log(error);
      },
      () => {
        this.router.navigateByUrl('/tenders/proposal')
      }
    )        
  }




}
