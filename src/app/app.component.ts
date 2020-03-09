import { Component } from '@angular/core';
import { MatDrawerMode } from '@angular/material/sidenav';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getSidenavIsOpen, getSidenavMode, SidenavState } from './store/reducers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Todo-App-Angular';

  sidenavMode$: Observable<MatDrawerMode>;
  isSidenavOpen$: Observable<boolean>;

  constructor(private store: Store<SidenavState>) {
    this.isSidenavOpen$ = this.store.select(getSidenavIsOpen);
    this.sidenavMode$ = this.store.select(getSidenavMode);
  }
}
