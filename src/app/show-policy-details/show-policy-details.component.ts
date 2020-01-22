import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { error } from 'protractor';

@Component({
  selector: 'app-show-policy-details',
  templateUrl: './show-policy-details.component.html',
  styleUrls: ['./show-policy-details.component.css']
})
export class ShowPolicyDetailsComponent implements OnInit {

  policies: any;
  constructor(public service: DataService) {
    this.getDataOfPolicies();
  }

  getDataOfPolicies() {
    this.service.getDataOfPolicies().subscribe((result) => {
      console.log(result);
      this.policies = result;
    // tslint:disable-next-line: no-shadowed-variable
    }, (error) => {
      console.log(error);
    });
  }

  ngOnInit() {
  }

}
