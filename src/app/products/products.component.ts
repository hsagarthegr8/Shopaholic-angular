import { Component, OnInit } from '@angular/core';

import { Product } from './product.interface'

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
      name:'Redmi Note 5',
      imgUrl:'https://rukminim1.flixcart.com/image/312/312/jdkjzww0/mobile/d/y/b/redmi-note-5-mzb5917in-original-imaf2g8zwrmywhqq.jpeg?q=70',
      price: 11999
    },
    {
      id:3,
      name:'Redmi Note 5',
      imgUrl:'https://rukminim1.flixcart.com/image/312/312/jdkjzww0/mobile/d/y/b/redmi-note-5-mzb5917in-original-imaf2g8zwrmywhqq.jpeg?q=70',
      price: 11999
    },
    {
      id:4,
      name:'Redmi Note 5',
      imgUrl:'https://rukminim1.flixcart.com/image/312/312/jdkjzww0/mobile/d/y/b/redmi-note-5-mzb5917in-original-imaf2g8zwrmywhqq.jpeg?q=70',
      price: 11999
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
