import { Component } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { BaseComponentService } from 'src/app/core/services/base-component.service';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todo-new',
  templateUrl: './todo-new.component.html',
  styleUrls: ['./todo-new.component.css']
})
export class TodoNewComponent{

  public todoForm: FormGroup = this.componentService.formBuilder.group({
    title: ['', Validators.required],
    description: ['']
  });

  constructor(private readonly componentService: BaseComponentService,
              private readonly todoService: TodoService) { }

  formSubmit(){
    if(!this.todoForm.valid){
      this.componentService.toastr.error("Invalid form. Title is a required value");
      return;
    }

    this.todoService.CreateToDo(this.todoForm.value.title, this.todoForm.value.description).subscribe({
      next: res => {
        this.componentService.toastr.success("ToDo created successfully");
        this.componentService.router.navigate(['/todo/list']);
      },
      error: err => {
        this.componentService.toastr.error("An error war occured while creating ToDo. Please try again");
      }
    });
  }

}
