import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ValueComponent } from './value/value.component';
import {HttpClientModule} from '@angular/common/http';
import { ListComponent } from './List/List.component';
import { HomeComponent } from './Home/Home.component';
import { FormsModule } from '@angular/forms';
import { NewItemComponent } from './NewItem/NewItem.component';
@NgModule({
   declarations: [
      AppComponent,
      ValueComponent,
      ListComponent,
      HomeComponent,
      NewItemComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      HttpClientModule,
      FormsModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
