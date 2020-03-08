import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from 'src/app/material/material.module';
import { TodoListItemComponent } from './todo-list-item.component';

@NgModule({
  declarations: [TodoListItemComponent],
  imports: [CommonModule, MaterialModule],
  exports: [TodoListItemComponent],
})
export class TodoListItemModule {}
