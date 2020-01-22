import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
 // selector: 'ngbd-collapse-basic',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public role = 'CLIA';
  public name = 'Mr.Sanket Benade';
  constructor() { }

  ngOnInit() {
  }

}
