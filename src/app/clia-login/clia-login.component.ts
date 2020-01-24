import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-clia-login',
  templateUrl: './clia-login.component.html',
  styleUrls: ['./clia-login.component.css']
})
export class CliaLoginComponent implements OnInit {

  u: any;

  constructor(private service: DataService,
              private router: Router,
              private auth: AuthService) { }

login(formData) {
                console.log(formData.form.value);
                let clia = formData.form.value;

                console.log(clia);
                let cliaLog = this.service.loginCLIA(clia);
                cliaLog.subscribe((result) => {
                  console.log(result);
                  if (result !== null) {
                  this.u = result;
                  console.log('valid clia login');
                  console.log(result);
                  window.sessionStorage.setItem('object', JSON.stringify(this.u));
                  window.sessionStorage.setItem('isActive' , '1');

                  // this.auth.setSession(agentLog);
                  // console.log(a);
                  this.router.navigate(['clia']);
              } else {
                console.log('login failed');
              }
                  });


}

  ngOnInit() {
  }



}
