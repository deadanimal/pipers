import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router'
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { first } from 'rxjs/operators';

export enum SelectionType {
  single = "single",
  multi = "multi",
  multiClick = "multiClick",
  cell = "cell",
  checkbox = "checkbox"
}

import { Presentation } from '../../../models/presentation.model';
import { PresentationService } from '../../../services/presentation.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: "app-project-presentation",
  templateUrl: "presentation.component.html"
})
export class PresentationComponent implements OnInit {
  
  presentations: Presentation[];

  entries: number = 10;
  selected: any[] = [];
  temp = [];
  activeRow: any;
  rows: any = []
  SelectionType = SelectionType;

  constructor(        
    public router: Router,
    private spinner: NgxSpinnerService,
    private presentationService: PresentationService) {
   

      this.temp = this.rows.map((prop, key) => {
        return {
          ...prop,
          id: key
        };
      });

  }

  entriesChange($event) {
    this.entries = $event.target.value;
  }
  filterTable($event) {
    let val = $event.target.value;
    this.temp = this.rows.filter(function(d) {
      for (var key in d) {
        if (d[key].toLowerCase().indexOf(val) !== -1) {
          return true;
        }
      }
      return false;
    });
  }
  onSelect({ selected }) {
    this.selected.splice(0, this.selected.length);
    this.selected.push(...selected);
    
    this.moveTo(selected[0]['id']);

  }
  onActivate(event) {
    this.activeRow = event.row;
    
  }

  ngOnInit() {
    //this.getAllPresentations();

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

  getAllPresentations() {
    
    this.spinner.show();

    this.presentationService.getPresentations().subscribe(
      (data) => {
        this.presentationService.presentations = data;
      },
      (error) => {
        console.log(error);
        this.spinner.hide();
      },
      () => {
        this.presentations = this.presentationService.presentations;
        this.temp = this.presentations;
        this.spinner.hide();
      }
    )   

  }

  moveTo(link) {

    if (link == 'new') {
      this.router.navigateByUrl('/tenders/presentation/new')
    } else {

      this.presentationService.presentation = this.presentationService.presentations.find(element => element.id == link)

      let url_string = '/tenders/presentation/' + link
      this.router.navigateByUrl(url_string)
    }

  }

  action(action_type, presentation) {
    if (action_type == 'reschedule') {
      let new_date_ = ''
      this.presentationService.reschedulePresentation(presentation.id, new_date_).subscribe(
        (data: any) => {
          console.log(data)
        }, (error) => {
          console.log(error)
        }, () => {
          this.getAllPresentations()
        }
      )
    } else if (action_type == 'detail') {
      this.presentationService.presentation = this.presentationService.presentations.find(element => element.id == presentation.id)
      let url_string = '/tenders/presentation/' + presentation.id
      this.router.navigateByUrl(url_string)      
    }
  }

}
