import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-agent-login',
  templateUrl: './agent-login.component.html',
  styleUrls: ['./agent-login.component.css']
})
export class AgentLoginComponent implements OnInit {

  u: any;
  constructor(private service: DataService,
              private router: Router,
              private auth: AuthService) { }

  login(formData) {
        console.log(formData.form.value);
        let agent = formData.form.value;

        console.log(agent);
        let agentLog = this.service.loginAgent(agent);
        agentLog.subscribe((result) => {
          console.log(result);
          if (result !== null) {
          this.u = result;
          console.log('valid agent login');
          console.log(result);
          window.sessionStorage.setItem('object', JSON.stringify(this.u));
          window.sessionStorage.setItem('isActive' , '1');

          // this.auth.setSession(agentLog);
          // console.log(a);
          this.router.navigate(['agent']);
      } else {
        console.log('login failed');
      }
        });


  }
  ngOnInit() {
  }

}
