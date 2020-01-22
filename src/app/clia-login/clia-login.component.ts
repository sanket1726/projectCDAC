import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-clia-login',
  templateUrl: './clia-login.component.html',
  styleUrls: ['./clia-login.component.css']
})
export class CliaLoginComponent implements OnInit {

  // clia: any;

  constructor(private service: DataService, private router: Router) { }

  ngOnInit() {
  }

  login(formData) {
    console.log(formData.form.value);
    let clia = formData.form.value;

    console.log(clia);
    let a = this.service.loginCLIA(clia);
    a.subscribe((result) => {
      console.log(result);
      if (a !== null) {
        console.log('valid login');
        console.log(a);
        this.router.navigate(['clia']);
      } else {
        console.log('login failed');
      }

    });
  }

}
