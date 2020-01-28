import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-show-cust-by-aid',
  templateUrl: './show-cust-by-aid.component.html',
  styleUrls: ['./show-cust-by-aid.component.css']
})
export class ShowCustByAIdComponent implements OnInit {

  // currentAgent: any;
  currentAgent : any;
  agent: any;
  customers: any;
  constructor(public service: DataService) {
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

      console.log(this.agent.policyHolders.policies);
      }, (error) => {
      console.log(error);
    });
  }

  // getAgentById() {
  //   this.currentAgent = JSON.parse(window.sessionStorage.getItem('object'));
  //   this.service.getAgentById(this.currentAgent.agentId).subscribe(
  //     a => {
  //       this.customersList = a;
  //       for(let i=0 ;i<a.toString.length ; i++) {

  //         let fName = this.customersList.policyHolders[0].fName;
  //       }
  //     }
  //   )
  // }

  ngOnInit() {
  }

}
