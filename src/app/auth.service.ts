import { Injectable } from '@angular/core';
import {Router} from '@angular/router'

@Injectable({
	providedIn: 'root'
})
export class AuthService {
	private isAuthenticated:boolean
	username:string
	constructor(private route:Router) { 
		this.isAuthenticated = false
	}

	getAuthenticated():boolean {
		return this.isAuthenticated
	}

	logIn(username:string):void {
		this.username = username
		this.isAuthenticated = true
		this.route.navigate([''])

	}

	logOut():void {
		this.isAuthenticated = false
	}
}
