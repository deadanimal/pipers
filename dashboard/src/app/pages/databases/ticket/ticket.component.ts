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

import { Ticket } from '../../../models/ticket.model';
import { TicketService } from '../../../services/ticket.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: "app-database-ticket",
  templateUrl: "ticket.component.html"
})
export class TicketComponent implements OnInit {
  
  tickets: Ticket[];

  entries: number = 10;
  selected: any[] = [];
  temp = [];
  activeRow: any;
  rows: any = []
  SelectionType = SelectionType;

  constructor(        
    public router: Router,
    private spinner: NgxSpinnerService,
    private ticketService: TicketService) {
   

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
    this.getAllTickets();

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

  getAllTickets() {

    this.spinner.show();

    this.ticketService.getTickets().subscribe(
      (data) => {
        this.ticketService.tickets = data;
      },
      (error) => {
        console.log(error);
        this.spinner.hide();
      },
      () => {
        this.tickets = this.ticketService.tickets;
        this.temp = this.tickets;
        this.spinner.hide();
      }
    )    

  }

  moveTo(link) {

    if (link == 'new') {
      this.router.navigateByUrl('/databases/ticket/new')
    } else {

      this.ticketService.ticket = this.ticketService.tickets.find(element => element.id == link)

      let url_string = '/databases/ticket/' + link
      this.router.navigateByUrl(url_string)
    }

  }

}
