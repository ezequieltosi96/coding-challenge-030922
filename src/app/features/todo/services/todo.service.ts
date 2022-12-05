import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ToDo, ToDoViewModel } from '../models/todo/todo.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private readonly httpClient: HttpClient) { }

  DeleteToDo(id: number): Observable<object> {
    return this.httpClient.delete(`http://localhost:3000/todos/${id}`);
  }

  UpdateToDoTime(id: number, timeSpent: number): Observable<object> {
    return this.httpClient.patch(`http://localhost:3000/todos/${id}`, {spentTime: timeSpent});
  }

  CompleteToDo(id: number): Observable<object> {
    return this.httpClient.patch(`http://localhost:3000/todos/${id}`, {completed: true});
  }

  CreateToDo(title: string, description: string): Observable<number>{
    return this.httpClient.post<number>("http://localhost:3000/todos", {title: title, description: description, completed: false, spentTime: 0});
  }

  GetToDoList(): Observable<ToDoViewModel[]> {
    let todos: ToDoViewModel[] = [];
    this.httpClient.get<ToDo[]>("http://localhost:3000/todos").subscribe(
      res => {
        res.forEach(todo => {
          todos.push(new ToDoViewModel(todo.id, todo.title, todo.description, todo.spentTime, false, false, todo.completed));
        });
      }
    );

    return of(todos);
  }
}
