import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { TodoListItemComponent } from './todo-list-item.component';
import { MatDividerModule } from '@angular/material/divider';

@NgModule({
  declarations: [TodoListItemComponent],
  imports: [CommonModule, MatCardModule, MatIconModule, MatButtonModule, MatDividerModule],
  exports: [TodoListItemComponent],
})
export class TodoListItemModule {}
