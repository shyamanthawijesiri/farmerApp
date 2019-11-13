import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { AfterMyLandComponent } from './after-my-land/after-my-land.component';
import { LoginComponent } from './login/login.component';
import { SigninComponent } from './signin/signin.component';
import { MylandComponent } from './myland/myland.component';


const routes: Routes = [

  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component:HomepageComponent},
  {path: 'login', component:LoginComponent},
  {path: 'signin', component:SigninComponent},
  {path: 'myland', component:MylandComponent},
  {path: 'myland/myhavest', component:AfterMyLandComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
