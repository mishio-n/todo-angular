import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from 'src/app/material/material.module';
import { SettingComponent } from './setting.component';

const routes: Routes = [
  {
    path: '',
    component: SettingComponent,
  },
];

@NgModule({
  declarations: [SettingComponent],
  imports: [CommonModule, RouterModule.forChild(routes), MaterialModule],
  exports: [SettingComponent],
})
export class SettingModule {}
