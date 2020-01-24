import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
   if (this.IsLoggedIn()) {
     console.log('User Has Logged in');
     return true;
   } else {
    console.log('User Has not Logged in');
    alert('Please Login...');
    this.router.navigate(['home']);
    return false;
   }
  }

  setSession(object) {
    return window.sessionStorage.setItem('object', JSON.stringify(object));
  }

  getSession() {
    return JSON.parse(window.sessionStorage.getItem('object'));
  }

  IsLoggedIn() {

    if (window.sessionStorage.getItem('isActive') != null
        &&
       window.sessionStorage.getItem('isActive') === '1') {
      // some logic to check if person has logged in
      return true;
    } else {
      return false;
    }
  }

  Logout() {
    window.sessionStorage.setItem('isActive', '0');
    window.sessionStorage.setItem('object', '0');
    this.router.navigate(['home']);
  }

  Login() {
    window.sessionStorage.setItem('isActive', '0');
  }
}

