import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {PartnersComponent} from "./partners/partners.component";
import {StudentsComponent} from "./students/students.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'partners', component: PartnersComponent },
  {path:'students',component:StudentsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
