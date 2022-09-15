import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {MainComponent} from "./main/main.component";
import {LoginComponent} from "./login/login.component";
import {RegistrationComponent} from "./registration/registration.component";
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import {HomeComponent} from "./home/home.component";


const routes: Routes= [
  {path: '', component: MainComponent, pathMatch:'full'},
  {path: 'main', component: MainComponent, pathMatch: 'full'},
  {path: 'registration', component: RegistrationComponent},
  {path: '', redirectTo: '/registration', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'dashboard',component: DashboardComponent}
];


@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
