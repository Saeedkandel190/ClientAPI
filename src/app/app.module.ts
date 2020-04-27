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
import { NavComponent } from './Nav/Nav.component';
import { AuthService } from './Services/HttpService/Auth/Auth.service';
import { RegisterComponent } from './Register/Register.component';
import { DefaultComponent } from './default/default.component';
import { HttpInterceptorProvider } from './Services/error.interceptor';
@NgModule({
   declarations: [
      AppComponent,
      ValueComponent,
      ListComponent,
      HomeComponent,
      NewItemComponent,
      NavComponent,
      RegisterComponent,
      DefaultComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      HttpClientModule,
      FormsModule
   ],
   providers: [
      AuthService,
      HttpInterceptorProvider
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
