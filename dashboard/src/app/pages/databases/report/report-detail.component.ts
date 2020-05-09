import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from '@angular/router'
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { first } from 'rxjs/operators';

import { Report } from '../../../models/report.model';
import { ReportService } from '../../../services/report.service';

@Component({
  selector: "app-database-report-detail",
  templateUrl: "report-detail.component.html"
})
export class ReportDetailComponent implements OnInit {
  
  report: Report;
  _id: string;

  reportForm: any = {};
  loading = false;
  submitted = false;  

  constructor(        
    public route: ActivatedRoute,
    public router: Router,
    private reportService: ReportService) {
  }



  ngOnInit() {

    this._id = this.route.snapshot.params['id'];
    this.report = this.reportService.report;

    if (!this.report) {
      this.getSpecificReport(this._id)
    } else {
      this.reportForm = this.report;
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

  getSpecificReport(_id) {
    this.reportService.getReport(_id).subscribe(
      (data) => {
        this.report = data
      }, (error) => {

      }, () => {

      }
    )
  }

  onSubmit() {
    console.log(this.reportForm);

    const formData = new FormData();
    formData.append('name', this.reportForm.name);  
    formData.append('label', this.reportForm.label);    

    this.reportService.updateReport(this._id,this.reportForm).subscribe(
      (data: any) => {
        console.log(data);
        this.reportService.report = data;
        this.report = this.reportService.report;
      },
      (error) => {
        console.log(error);
      },
      () => {
        this.router.navigateByUrl('/databases/report')
      }
    )        
  }




}
