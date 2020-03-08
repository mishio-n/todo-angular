import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { toggleSidebar } from '../actions/layout.actions';
import { tap } from 'rxjs/operators';

@Injectable()
export class LayoutEffects {
  private toggleSidebar$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(toggleSidebar.type)
        // tap(() => this.sidebarService.toggle())
      ),
    { dispatch: false }
  );

  constructor(private actions$: Actions, private sidebarService: any) {}
}
