import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-show-pol-by-aid',
  templateUrl: './show-pol-by-aid.component.html',
  styleUrls: ['./show-pol-by-aid.component.css']
})
export class ShowPolByAidComponent implements OnInit {

  currentAgent: any;
  agent: any;
  customers: any;
  policies: [];
  constructor(public service: DataService,
              public router: Router) {
              this.getAgentById();
              }

              getAgentById() {
                this.currentAgent = JSON.parse(window.sessionStorage.getItem('object'));
                this.service.getAgentById(this.currentAgent.agentId).subscribe((result) => {

                  this.agent = result;
                  //  this.customersList = this.agent.policyHolders[0];
                  // if(this.customers == null)
                  this.customers = this.agent.policyHolders;
                  console.log(this.agent);
                  console.log(this.customers);

                  // tslint:disable-next-line: prefer-for-of
                  for (let index = 0; index < this.customers.length ; index++) {
                  let element = this.customers[index];
                  // tslint:disable-next-line: curly
                  if (element.custId == 1001)
                  this.policies = element.policies;
                  }


                 for (let index = 0; index < this.policies.length; index++) {
                 console.log(this.policies[index]);
                 }

                  // this.policies = this.customers.policies;
                  console.log("Policies="+this.policies);
                  }, (error) => {
                  console.log(error);
                });
              }
  ngOnInit() {
  }

}
