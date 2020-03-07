import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { State, initialState } from '../state';

@Injectable({ providedIn: 'root' })
export class Store {
  private state$ = new BehaviorSubject<State>(initialState);

  update(fn: (state: State) => State) {
    const current = this.state$.value;
    this.state$.next(fn(current));
  }

  select<T>(selector: (state: State) => T) {
    return this.state$.pipe(map(selector));
  }
}
