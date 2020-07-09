import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import {HeaderComponent} from '../header/header.component';
import {IndexComponent} from '../index/index.component';
import {LoginComponent} from '../login/login.component';
import {HomePageComponent} from '../home-page/home-page.component';

import {FormsModule} from '@angular/forms';
import {MaterialModule} from '../material/material.module';
import {RoutingModule, RouteComponents} from '../routing/routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    IndexComponent,
    LoginComponent,
    HomePageComponent,
    RouteComponents
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
