import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'

import { AuthService } from './auth/auth.service';
import { ProductService } from './products/product.service'
import { CartService } from './cart/cart.service'

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { AuthComponent } from './auth/auth.component';
import { CategoriesComponent } from './categories/categories.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductsComponent } from './products/products.component';
import { CartComponent } from './cart/cart.component'

import { AuthGuard } from './auth/auth.guard'



const appRoutes: Routes = [
  { path: 'login', component: AuthComponent },
  { path: 'logout',component: AuthComponent },
  { path: 'cart', component: CartComponent, canActivate:[AuthGuard] },
  { path: '', component: DashboardComponent}
  //{ path: '**', component: PageNotFoundComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    AuthComponent,
    CategoriesComponent,
    DashboardComponent,
    ProductsComponent,
    CartComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule
  ],
  providers: [AuthService, ProductService, CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
