import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import { HeaderModule } from './shared/components/header/header.module';
import { SidenavModule } from '@shared/components/sidenav/sidenav.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, MaterialModule, HeaderModule, SidenavModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
