import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { AuthComponent } from './auth/auth.component';
import { CategoriesComponent } from './categories/categories.component';

import { AuthService } from './auth.service'


const appRoutes: Routes = [
  { path: 'login', component: AuthComponent },
  { path: 'logout',component: AuthComponent },
  //{ path: '**', component: PageNotFoundComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    AuthComponent,
    CategoriesComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
