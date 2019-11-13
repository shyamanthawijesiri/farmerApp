import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { SigninComponent } from './signin/signin.component';
import { AfterProcessBidComponent } from './after-process-bid/after-process-bid.component';
import { AfterSubmitComponent } from './after-submit/after-submit.component';
import { AfterMyLandComponent } from './after-my-land/after-my-land.component';
import { MylandComponent } from './myland/myland.component';


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    LoginComponent,
    SigninComponent,
    AfterProcessBidComponent,
    AfterSubmitComponent,
    AfterMyLandComponent,
    MylandComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
