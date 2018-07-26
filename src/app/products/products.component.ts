import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { Product } from './product.interface'

import { CartService } from '../cart/cart.service'
import { AuthService } from '../auth/auth.service'

import { products } from './products'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products:Product[] = products
  constructor(private router:Router, private cart:CartService, private auth:AuthService) { }

  ngOnInit() {
  }

  addToCart(product:Product) {
    if(!this.auth.getAuthenticated()) 
      this.router.navigate(['login'])
    else 
      this.cart.addToCart(product)
  }
}
