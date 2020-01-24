import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-agent',
  templateUrl: './agent.component.html',
  styleUrls: ['./agent.component.css']
})
export class AgentComponent implements OnInit {

  customer : any;
  constructor(private auth: AuthService) { }
  logOut() {
    this.auth.Logout();

  }

  ngOnInit() {

    this.customer = JSON.parse(window.sessionStorage.getItem('object'));
    console.log(this.customer.agentId);

  }

}
