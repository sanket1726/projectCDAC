import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import { from } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  cliaUrl = 'http://localhost:8080/liccliaproject/clia';
  agentsUrl = 'http://localhost:8080/liccliaproject/agents';
  customersDetails = 'http://localhost:8080/liccliaproject/policyHolders';
  policyDetails = 'http://localhost:8080/liccliaproject/policies';
  constructor(public http: HttpClient) { }

//Data services for clia

  getDataOfClia() {
    return this.http.get(this.cliaUrl);
  }

  loginCLIA(data) {
    return this.http.get('http://localhost:8080/liccliaproject/clia/login/' + data.cliaId + '/' + data.phNumber);
  }

//Data services for agent
  getDataOfAgents() {
    return this.http.get(this.agentsUrl);
  }

  addAgent(agent) {
    console.log(agent);
    return this.http.post(this.agentsUrl, agent);
  }

  editAgentById(agent) {
    console.log(agent);
    const formData = new FormData();
    formData.append('phNumber', agent.phNumber);
    formData.append('addressLine1', agent.addressLine1);
    formData.append('city', agent.city);
    formData.append('district', agent.district);
    formData.append('state', agent.state);
    console.log(agent);
    return this.http.put(`${this.agentsUrl}/${agent.agentId}`, formData);
  }

  getAgentById(agentId) {
    return this.http.get(this.agentsUrl + agentId);
  }

  loginAgent(data) {
    return this.http.get('http://localhost:8080/liccliaproject/agents/login/' + data.agentId + '/' + data.phNumber);
  }

//data services for agents
  getDataOfCustomers() {
    return this.http.get(this.customersDetails);
  }

  getDataOfPolicies() {
    return this.http.get(this.policyDetails);
  }










  loginCustomer(data) {
    return this.http.get('http://localhost:8080/liccliaproject/policyHolders/login/' + data.custId + '/' + data.phNumber);
  }
}
