import { Component } from '@angular/core';
import { $ } from 'protractor';
import { DataService } from './data.service';
import { AuthService } from './auth.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',

  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = '';
  public role = '';
  public name = '';
  user : any;
  constructor(public service: DataService,
              public authService: AuthService) {
     this.user = JSON.parse(window.sessionStorage.getItem('object'));

  }

  logOut() {
    this.authService.Logout();
  }

}

