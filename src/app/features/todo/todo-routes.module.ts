import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoComponent } from './todo.component';

const routes : Routes = [
  { 
    path: 'todo', 
    component: TodoComponent,
    loadChildren: () => import('./todo-child-routes.module').then(m => m.TodoChildRoutesModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [ RouterModule ]
})
export class TodoRoutesModule { }
