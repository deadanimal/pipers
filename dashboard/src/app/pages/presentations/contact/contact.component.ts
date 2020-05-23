import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router'
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { first } from 'rxjs/operators';

import { ToastrService } from "ngx-toastr";


import { Note } from '../../../models/note.model';
import { NoteService } from '../../../services/note.service';
import { FuncService } from 'src/app/services/func.service';

@Component({
  selector: "app-contact",
  templateUrl: "contact.component.html",
})
export class ContactComponent implements OnInit {
  
  contactForm: any = {};
  loading = false;
  submitted = false;  

  captchaResolved: boolean = false;

  constructor(
    private toastr: ToastrService,
    public funcService: FuncService,
    public router: Router,
  ) {}

  ngOnInit() {
    
  }

  onSubmit() {


    if (this.captchaResolved) {
      this.funcService.contactUs(this.contactForm).subscribe(
        (data: any) => {
          console.log(data);
        },
        (error) => {
          console.log(error);
        },
        () => {
          this.toastr.show(
            '<span class="alert-icon ni ni-bell-55" data-notify="icon"></span> <div class="alert-text"</div> <span class="alert-title" data-notify="title">Contact Form</span> <span data-notify="message">Your contact detail has been shared with us. Our representative will contact you soon.</span></div>',
            '',
            {
              timeOut: 8000,
              closeButton: true,
              enableHtml: true,
              tapToDismiss: false,
              titleClass: 'alert-title',
              positionClass: 'toast-top-center',
              toastClass: "ngx-toastr alert alert-dismissible alert-success alert-notify",
            }
          );
          this.router.navigateByUrl('/p/home');
        });
    } else {
      return
    }
    /*
    this.noteService.newNote(this.noteForm).subscribe(
      (data: any) => {
        console.log(data);
      },
      (error) => {
        console.log(error);
      },
      () => {
        this.router.navigateByUrl('/p/home')
      }
    )    
    */    

  }    

  resolved(captchaResponse: string) {
    this.captchaResolved = true;
    console.log(`Resolved captcha with response: ${captchaResponse}`);
}  
}
