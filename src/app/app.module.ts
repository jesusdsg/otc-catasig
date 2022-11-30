import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';

import { AutoCompleteModule } from 'primeng/autocomplete';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatGridListModule } from '@angular/material/grid-list';
import { MenubarModule } from 'primeng/menubar';
import { MenuComponent } from './shared/menu/menu.component';

@NgModule({
  declarations: [AppComponent, LayoutComponent, MenuComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MenubarModule,
    AutoCompleteModule,
    BrowserAnimationsModule,
    MatGridListModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
