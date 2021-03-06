import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProfileComponent } from './components/profile/profile.component';
import { NewlistingComponent } from './components/newlisting/newlisting.component';
import { FlashMessagesModule } from 'angular2-flash-messages';

import {ValidateService} from './services/validate.service';
import {AuthService} from './services/auth.service';

const appRoutes: Routes = [
  {path:'', component: HomeComponent},
  {path:'signup', component: SignupComponent},
  {path:'signin', component: SigninComponent},
  {path:'dashboard', component: DashboardComponent},
  {path:'profile', component: ProfileComponent},
  {path:'new-listing', component: NewlistingComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SigninComponent,
    SignupComponent,
    HomeComponent,
    DashboardComponent,
    ProfileComponent,
    NewlistingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    FlashMessagesModule
  ],
  providers: [ValidateService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
