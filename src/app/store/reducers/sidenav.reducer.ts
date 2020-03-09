import { MatDrawerMode } from '@angular/material/sidenav';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export interface SidenavState {
  isOpen: boolean;
  mode: MatDrawerMode;
}

const initialState: SidenavState = {
  isOpen: false,
  mode: 'side',
};

export const reduceSidenav = (state: SidenavState = initialState): SidenavState => {
  return {
    ...state,
    isOpen: !state.isOpen,
  };
};

export const getSidenavState = createFeatureSelector<SidenavState>('sidenav');
export const getSidenavIsOpen = createSelector(getSidenavState, (state: SidenavState) => state.isOpen);
export const getSidenavMode = createSelector(getSidenavState, (state: SidenavState) => state.mode);
