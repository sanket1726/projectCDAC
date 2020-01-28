import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-customer-login',
  templateUrl: './customer-login.component.html',
  styleUrls: ['./customer-login.component.css']
})
export class CustomerLoginComponent implements OnInit {

  u: any;
  constructor(private service: DataService,
              private router: Router,
              private auth: AuthService) { }


              login(formData) {
                console.log(formData.form.value);
                // tslint:disable-next-line: prefer-const
                let customer = formData.form.value;

                console.log(customer);
                // tslint:disable-next-line: prefer-const
                let customerLog = this.service.loginCustomer(customer);
                customerLog.subscribe((result) => {
                  console.log(result);
                  if (result !== null) {
                  this.u = result;
                  console.log('valid customer login');
                  console.log(result);
                  window.sessionStorage.setItem('object', JSON.stringify(this.u));
                  window.sessionStorage.setItem('isActive' , '1');

                  // this.auth.setSession(agentLog);
                  // console.log(a);
                  this.router.navigate(['policy-holder']);
              } else {
                console.log('login failed');
              }
                  });


}

  ngOnInit() {
  }

}
