import { Injectable } from '@angular/core';
import { Product} from '../products/product.interface'

@Injectable({
  providedIn: 'root'
})
export class CartService {
  productsInCart:Product[] = []

  constructor() { }

  addToCart(product:Product) {
    this.productsInCart.push(product)
  }
}
