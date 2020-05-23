import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from '@angular/router'
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { first } from 'rxjs/operators';

import { Task } from '../../../models/task.model';
import { TaskService } from '../../../services/task.service';

@Component({
  selector: "app-project-task-detail",
  templateUrl: "task-detail.component.html"
})
export class TaskDetailComponent implements OnInit {
  
  task: Task;
  _id: string;

  taskForm: any = {};
  loading = false;
  submitted = false;  

  constructor(        
    public route: ActivatedRoute,
    public router: Router,
    private taskService: TaskService) {
  }



  ngOnInit() {

    this._id = this.route.snapshot.params['id'];
    this.task = this.taskService.task;

    if (!this.task) {
      this.getSpecificTask(this._id)
    } else {
      this.taskForm = this.task;
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

  getSpecificTask(_id) {
    this.taskService.getTask(_id).subscribe(
      (data) => {
        this.task = data
      }, (error) => {

      }, () => {

      }
    )
  }

  onSubmit() {
    console.log(this.taskForm);

    const formData = new FormData();
    formData.append('name', this.taskForm.name);  
    formData.append('label', this.taskForm.label);    

    this.taskService.updateTask(this._id,this.taskForm).subscribe(
      (data: any) => {
        console.log(data);
        this.taskService.task = data;
        this.task = this.taskService.task;
      },
      (error) => {
        console.log(error);
      },
      () => {
        this.router.navigateByUrl('/tenders/task')
      }
    )        
  }




}
