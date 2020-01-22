import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
@Component({
  selector: 'app-clia',
  templateUrl: './clia.component.html',
  styleUrls: ['./clia.component.css']
})
export class CliaComponent implements OnInit {

  clias: any;

  constructor(public service: DataService) {

  }



  ngOnInit() {
  }

}
