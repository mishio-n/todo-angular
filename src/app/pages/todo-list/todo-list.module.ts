import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { TodoListItemModule } from 'src/app/shared/components/todo-list-item/todo-list-item.module';
import { TodoListComponent } from './todo-list.component';
import { MaterialModule } from 'src/app/material/material.module';

const routes: Routes = [
  {
    path: '',
    component: TodoListComponent,
  },
];

@NgModule({
  declarations: [TodoListComponent],
  imports: [CommonModule, RouterModule.forChild(routes), FlexLayoutModule, MaterialModule, TodoListItemModule],
  exports: [TodoListComponent],
})
export class TodoListModule {}
