import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import {HeaderComponent} from '../header/header.component';
import {IndexComponent} from '../index/index.component';
import {LoginComponent} from '../login/login.component';
import {HomePageComponent} from '../home-page/home-page.component';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MaterialModule} from '../material/material.module';
import {RoutingModule, RouteComponents} from '../routing/routing.module';
import {CardViewComponent} from '../card-view/card-view.component';
import {ListViewComponent} from '../list-view/list-view.component';
import {HttpClientModule} from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    IndexComponent,
    LoginComponent,
    HomePageComponent,
    CardViewComponent,
    ListViewComponent,
    RouteComponents
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    RoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
