import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { Product } from './product.interface'

import { CartService } from '../cart/cart.service'
import { AuthService } from '../auth/auth.service'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products:Product[] = [
    {
      id:1,
      name:'Redmi Note 5',
      imgUrl:'https://rukminim1.flixcart.com/image/312/312/jdkjzww0/mobile/d/y/b/redmi-note-5-mzb5917in-original-imaf2g8zwrmywhqq.jpeg?q=70',
      price: 11999
    },
    {
      id:2,
      name:'Honor 7A',
      imgUrl:'https://rukminim1.flixcart.com/image/312/312/jhgl5e80/mobile/g/h/x/honor-7a-v100r001-aum-al20-original-imaf5h4amdhbzxtz.jpeg?q=70',
      price: 8999
    },
    {
      id:3,
      name:'Apple iPhone X',
      imgUrl:'https://rukminim1.flixcart.com/image/312/312/j9d3bm80/mobile/g/x/j/apple-iphone-x-mqa62hn-a-original-imaeyzyfdzhfckef.jpeg?q=70',
      price: 107999
    },
    {
      id:4,
      name:'Samsung Galaxy S9',
      imgUrl:'https://rukminim1.flixcart.com/image/312/312/jeiukcw0/mobile/9/y/y/samsung-galaxy-s9-plus-sm-g965fzkdins-original-imaf372g5zukw8wr.jpeg?q=70',
      price: 57900
    },
    {
      id:5,
      name:'Google Pixel 2',
      imgUrl:'https://rukminim1.flixcart.com/image/312/312/j8esr680/mobile/f/m/d/google-pixel-2-na-original-imaeyfsxhfqwqbr5.jpeg?q=70',
      price: 53999
    },

  ]
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
