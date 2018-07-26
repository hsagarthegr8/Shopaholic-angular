import { Injectable } from '@angular/core';
import { Product} from '../products/product.interface'

@Injectable({
  providedIn: 'root'
})
export class CartService {
  productsInCart:Set<Product> = new Set<Product>()
  productsInCartArray:Product[] = []
  productsQtyMap:Map<Product,number> = new Map<Product,number>()
  numProductsInCart:number
  constructor() {
    this.numProductsInCart = 0
   }

  addToCart(product:Product) {
    this.productsInCart.add(product)
    if(this.productsQtyMap.has(product)) {
      this.productsQtyMap.set(product,this.productsQtyMap.get(product)+1)
    }
    else {
      this.productsQtyMap.set(product,1)
    }
    this.numProductsInCart += 1
    this.productsInCartArray = Array.from(this.productsInCart)
  }

  removeFromCart(product:Product) {
    this.productsInCart.delete(product)
    this.numProductsInCart -= 1
    this.productsQtyMap.set(product,this.productsQtyMap.get(product)-1)
    this.productsInCartArray = Array.from(this.productsInCart)
  }
}
