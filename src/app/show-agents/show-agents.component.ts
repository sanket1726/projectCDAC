import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-show-agents',
  templateUrl: './show-agents.component.html',
  styleUrls: ['./show-agents.component.css']
})
export class ShowAgentsComponent implements OnInit {
  agents: any;
  public i = 1;
  constructor(public service: DataService) {
    this.getData();
  }

  getData() {
    this.service.getDataOfAgents().subscribe((result) => {
      console.log(result);
      this.agents = result;
    }, (error) => {
      console.error(error);
    });
  }

  ngOnInit() {
  }

}
