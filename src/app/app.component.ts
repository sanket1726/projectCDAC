import { Component } from '@angular/core';
import { $ } from 'protractor';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',

  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'LIC CLIA';
  public role = 'CLIA';
  public name = 'Mr.Sanket Benade';

  constructor(public service: DataService) {

  }

}

