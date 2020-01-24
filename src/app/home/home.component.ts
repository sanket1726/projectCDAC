import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import {AgentLoginComponent} from '../agent-login/agent-login.component';

@Component({
  selector: 'app-home',
 // selector: 'ngbd-collapse-basic',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public role = 'CLIA';
  public name = 'Mr.Sanket Benade';
  constructor(private service: DataService,
              private router: Router,
              private auth: AuthService) { }


  ngOnInit() {
//    window.sessionStorage.getItem('object');
  }

}
