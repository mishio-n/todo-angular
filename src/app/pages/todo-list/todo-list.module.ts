import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { TodoListItemModule } from 'src/app/shared/components/todo-list-item/todo-list-item.module';
import { TodoListComponent } from './todo-list.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

const routes: Routes = [
  {
    path: '',
    component: TodoListComponent,
  },
];

@NgModule({
  declarations: [TodoListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FlexLayoutModule,
    TodoListItemModule,
    MatIconModule,
    MatButtonModule,
  ],
  exports: [TodoListComponent],
})
export class TodoListModule {}
