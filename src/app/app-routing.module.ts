import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from '../app/Home/Home.component';
import {ValueComponent} from '../app/value/value.component';
import {ListComponent} from '../app/List/List.component';

const routes: Routes = [
  {path : '', component : HomeComponent},
  {path : 'List', component : ListComponent},
  {path : 'Value', component : ValueComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
