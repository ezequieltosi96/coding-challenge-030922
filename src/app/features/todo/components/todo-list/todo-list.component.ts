import { Component } from '@angular/core';
import { Icons } from 'src/app/core/enums/icons.enum';
import { BaseComponentService } from 'src/app/core/services/base-component.service';
import { ToDoViewModel } from '../../models/todo/todo.model';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {

  public todoList: ToDoViewModel[] = [];

  public Icons = Icons;
  public round = Math.round;

  constructor(private readonly componentService: BaseComponentService,
              private readonly todoService: TodoService) { }

  ngOnInit(): void {
    this.loadToDoList();
  }

  loadToDoList(): void {
      this.todoService.GetToDoList().subscribe({
        next: res => {
          this.todoList = res;;
        },
        error: err => {
          this.componentService.toastr.error('Failed to load ToDo\'s')
        }
      });
  }

  completeTodo(id: number): void{
    this.todoService.CompleteToDo(id).subscribe({
      next: res => {
        this.componentService.toastr.success('ToDo completed');
        this.loadToDoList();
      },
      error: err => {
        this.componentService.toastr.error('Failed to complete ToDo');
      }
    })
  }

  deleteTodo(item: any): void {
    this.todoService.DeleteToDo(item.id).subscribe({
      next: res => {
        this.componentService.toastr.success(`ToDo ${item.title} deleted`);
        this.loadToDoList();
      },
      error: err => {
        this.componentService.toastr.error('Failed to delete ToDo');
      }
    })
  }

  handleTimeSpent($event: number, item: ToDoViewModel) {
    this.todoService.UpdateToDoTime(item.id, item.spentTime + $event).subscribe({
      next: res => {
        this.loadToDoList();
      },
      error: err => {
        this.componentService.toastr.error('Failed to save ToDo time spent');
      }
    });
  }

  playPauseClick(item: ToDoViewModel){
    item.playing = !item.playing;
  }
}

