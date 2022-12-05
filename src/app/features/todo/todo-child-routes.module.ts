import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TodoListComponent } from "./components/todo-list/todo-list.component";
import { TodoNewComponent } from "./components/todo-new/todo-new.component";

const childRoutes: Routes = [
  { 
    path: 'list', 
    component: TodoListComponent
  },
  { 
    path: 'new', 
    component: TodoNewComponent
  }
]

@NgModule({
  imports: [ RouterModule.forChild(childRoutes) ],
  exports: [ RouterModule ]
})
export class TodoChildRoutesModule { }
