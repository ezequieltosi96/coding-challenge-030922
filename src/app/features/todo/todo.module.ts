import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoComponent } from './todo.component';
import { TodoRoutesModule } from './todo-routes.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoNewComponent } from './components/todo-new/todo-new.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    TodoComponent,
    TodoListComponent,
    TodoNewComponent
  ],
  imports: [
    CommonModule,
    TodoRoutesModule,
    SharedModule,
    HttpClientModule,
    ReactiveFormsModule
  ]
})
export class TodoModule { }
