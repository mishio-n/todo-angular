import { Todo } from '@shared/models/todo.model';

export const featureName = 'todo';

export interface State {
  loading: boolean;
  todos: Todo[];
  error?: any;
}

export const initialState: State = {
  loading: false,
  todos: [],
};
