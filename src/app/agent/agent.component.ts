import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-agent',
  templateUrl: './agent.component.html',
  styleUrls: ['./agent.component.css']
})
export class AgentComponent implements OnInit {

  agent : any;
  constructor(private auth: AuthService) { }
  logOut() {
    this.auth.Logout();

  }

  ngOnInit() {

    this.agent = JSON.parse(window.sessionStorage.getItem('object'));
    console.log(this.agent.agentId);

  }

}
