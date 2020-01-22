import { Component } from '@angular/core';
import { $ } from 'protractor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // templateUrl:``,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'LIC CLIA';
  public role = 'CLIA';
  public name = 'Mr.Sanket Benade';
}

