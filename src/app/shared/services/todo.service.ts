import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Todo } from '../models/todo.model';

const mock: Todo[] = [
  {
    id: '123456789',
    task: 'sample',
    user: 'sample',
    memo: 'sample',
    deadline: '2020-03-31 12:00:00',
    createdAt: '2020-03-31 12:00:00',
    updatedAt: '2020-03-31 12:00:00',
    isDone: true,
  },
  {
    id: '123456789',
    task: 'サンプル',
    user: 'sample',
    memo: 'サンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプル',
    deadline: '2020-03-31 12:00:00',
    createdAt: '2020-03-31 12:00:00',
    updatedAt: '2020-03-31 12:00:00',
    isDone: false,
  },
  {
    id: '123456789',
    task: 'さんぷる',
    user: 'sample',
    memo: 'sample',
    deadline: '2020-03-31 12:00:00',
    createdAt: '2020-03-31 12:00:00',
    updatedAt: '2020-03-31 12:00:00',
    isDone: true,
  },
  {
    id: '123456789',
    task: 'sample',
    user: 'sample',
    memo: 'sample',
    deadline: '2020-03-31 12:00:00',
    createdAt: '2020-03-31 12:00:00',
    updatedAt: '2020-03-31 12:00:00',
    isDone: false,
  },
  {
    id: '123456789',
    task: 'sample',
    user: 'sample',
    memo: 'sample',
    deadline: '2020-03-31 12:00:00',
    createdAt: '2020-03-31 12:00:00',
    updatedAt: '2020-03-31 12:00:00',
    isDone: false,
  },
  {
    id: '123456789',
    task: 'sample',
    user: 'sample',
    memo: 'sample',
    deadline: '2020-03-31 12:00:00',
    createdAt: '2020-03-31 12:00:00',
    updatedAt: '2020-03-31 12:00:00',
    isDone: false,
  },
  {
    id: '123456789',
    task: 'sample',
    user: 'sample',
    memo: 'sample',
    deadline: '2020-03-31 12:00:00',
    createdAt: '2020-03-31 12:00:00',
    updatedAt: '2020-03-31 12:00:00',
    isDone: false,
  },
  {
    id: '123456789',
    task: 'sample',
    user: 'sample',
    memo: 'sample',
    deadline: '2020-03-31 12:00:00',
    createdAt: '2020-03-31 12:00:00',
    updatedAt: '2020-03-31 12:00:00',
    isDone: false,
  },
];

@Injectable({ providedIn: 'root' })
export class TodoService {
  getAllTodo(): Observable<Todo[]> {
    return of(mock);
  }

  getOwnTodo(user: string): Observable<Todo[]> {
    return of(mock.filter(m => m.user === user));
  }

  create(data: any): Observable<Todo> {
    return of(data as Todo);
  }

  update(id: string, data: any): Observable<Todo> {
    const todo = mock.find(m => m.id === id);
    return of({ ...todo, ...data, updatedAt: new Date().toString() });
  }

  delete(id: string): Observable<void> {
    const found = mock.findIndex(m => m.id === id);
    mock.splice(found, 1);
    return;
  }

  undone(id: string): Observable<Todo> {
    const todo = mock.find(m => m.id === id);
    return of({ ...todo, updatedAt: new Date().toString(), isDone: false });
  }
}
