import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from '@angular/router'
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { first } from 'rxjs/operators';

import { Note } from '../../../models/note.model';
import { NoteService } from '../../../services/note.service';

@Component({
  selector: "app-project-note-detail",
  templateUrl: "note-detail.component.html"
})
export class NoteDetailComponent implements OnInit {
  
  note: Note;
  _id: string;

  noteForm: any = {};
  loading = false;
  submitted = false;  

  constructor(        
    public route: ActivatedRoute,
    public router: Router,
    private noteService: NoteService) {
  }



  ngOnInit() {

    this._id = this.route.snapshot.params['id'];
    this.note = this.noteService.note;

    if (!this.note) {
      this.getSpecificNote(this._id)
    } else {
      this.noteForm = this.note;
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

  getSpecificNote(_id) {
    this.noteService.getNote(_id).subscribe(
      (data) => {
        this.note = data
      }, (error) => {

      }, () => {

      }
    )
  }

  onSubmit() {
    console.log(this.noteForm);

    const formData = new FormData();
    formData.append('name', this.noteForm.name);  
    formData.append('label', this.noteForm.label);    

    this.noteService.updateNote(this._id,this.noteForm).subscribe(
      (data: any) => {
        console.log(data);
        this.noteService.note = data;
        this.note = this.noteService.note;
      },
      (error) => {
        console.log(error);
      },
      () => {
        this.router.navigateByUrl('/projects/note')
      }
    )        
  }




}
