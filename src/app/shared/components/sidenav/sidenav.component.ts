import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent {
  pages = [
    {
      name: 'Todo 一覧',
      path: '/todo-list',
    },
    {
      name: '設定',
      path: '/setting',
    },
  ];
}
