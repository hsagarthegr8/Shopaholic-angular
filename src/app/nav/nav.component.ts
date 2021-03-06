import { Component, OnInit } from '@angular/core';

import { AuthService } from '../auth/auth.service'
import { CartService } from '../cart/cart.service'

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(public auth:AuthService, public cart:CartService) { }

  ngOnInit() {
  }
  
  logOut() {
    this.auth.logOut()
  }

}
