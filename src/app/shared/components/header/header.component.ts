import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { toggleSidebar } from 'src/app/store/actions/layout.actions';
import { SidenavState } from 'src/app/store/reducers';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Input() title = '';

  constructor(private store: Store<SidenavState>) {}

  toggleSidenav() {
    this.store.dispatch(toggleSidebar());
  }
}
