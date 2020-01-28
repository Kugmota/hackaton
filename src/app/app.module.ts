import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PostComponent } from './post/post.component';
import { ViewComponent } from './view/view.component';
import { ErrorComponent } from './error/error.component';
import { ProfileComponent } from './profile/profile.component';

const appRoutes: Routes=[
  { path: 'login', component: LoginComponent},
  { path: '', component: RegisterComponent},
  { path: 'home', component: HomeComponent},
  { path: 'post', component: PostComponent},
  { path: 'view', component: ViewComponent},
  { path: 'profile', component: ProfileComponent},
  { path: 'error', component: ErrorComponent },
  { path: '**', component: ErrorComponent },
  
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    PostComponent,
    ViewComponent,
    ErrorComponent,
    ProfileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
