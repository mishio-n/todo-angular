import { Todo } from './models/todo.model';

export const initialState: State = {
  todoList: [],
  user: 'sample',
};

export interface State {
  todoList: Todo[];
  user: string;
}
