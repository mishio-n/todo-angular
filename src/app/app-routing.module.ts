import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoListModule } from './pages/todo-list/todo-list.module';
import { SettingModule } from './pages/setting/setting.module';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'todo-list',
    pathMatch: 'full',
  },
  {
    path: 'todo-list',
    loadChildren: () => TodoListModule,
  },
  {
    path: 'setting',
    loadChildren: () => SettingModule,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
