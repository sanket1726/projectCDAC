import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-edit-agent-details',
  templateUrl: './edit-agent-details.component.html',
  styleUrls: ['./edit-agent-details.component.css']
})
export class EditAgentDetailsComponent implements OnInit {

  agentId;
  agent;
  constructor(public activeRoute: ActivatedRoute,
              public service: DataService,
              public router: Router) {
                activeRoute.paramMap.subscribe((params) => {
                  let agentId = params.get('agentId');
                  this.service.getAgentById(this.agentId).subscribe((result) => {
                    console.log(result);
                    this.agent = result;
                    console.log(this.agent);
                  });
                });
               }

               editAgentById() {
                 this.agent.agentId = this.agentId;
                 this.agent.editAgentById(this.agent).subscribe((result) => {
                 console.log(result);
                 this.router.navigate(['show-agents']);
              });
               }
  ngOnInit() {
  }

}
