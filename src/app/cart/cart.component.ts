import { Component, OnInit } from '@angular/core';

import { CartService } from './cart.service'

import { Product } from '../products/product.interface'

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(public cart:CartService) { }

  ngOnInit() {
  }

  removeFromCart(product:Product) {
    this.cart.removeFromCart(product)
  }
  
}
