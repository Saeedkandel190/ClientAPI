import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from '../app/Home/Home.component';
import {ValueComponent} from '../app/value/value.component';
import {ListComponent} from '../app/List/List.component';
import {DefaultComponent} from '../app/default/default.component';

const routes: Routes = [
  {path : 'Register', component : DefaultComponent },
  {path : '', component: HomeComponent},
  {path : 'List', component : ListComponent},
  {path : 'Value', component : ValueComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
