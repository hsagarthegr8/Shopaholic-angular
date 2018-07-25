import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service'


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  errorMessage
  constructor(private auth:AuthService) { }

  ngOnInit() {
  }

  logIn(event:any){
    event.preventDefault()
    let user = event.target.elements[0].value
    let pass = event.target.elements[1].value
    if(pass == 'admin')
    {
      this.auth.logIn(user)
      
    }
  }

}
