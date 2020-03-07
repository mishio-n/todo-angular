import { Component } from '@angular/core';
import { TodoService } from 'src/app/shared/services/todo.service';
import { Observable } from 'rxjs';
import { Todo } from 'src/app/shared/models/todo.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent {
  todos$: Observable<Todo[]>;

  constructor(private todoService: TodoService) {
    this.todos$ = this.todoService.getAllTodo();
  }
}
