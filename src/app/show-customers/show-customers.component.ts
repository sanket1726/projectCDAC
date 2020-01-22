import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-show-customers',
  templateUrl: './show-customers.component.html',
  styleUrls: ['./show-customers.component.css']
})
export class ShowCustomersComponent implements OnInit {

  customers: any;
  constructor(public service: DataService) {
    this.getDataOfCustomers();
  }

  getDataOfCustomers() {
    this.service.getDataOfCustomers().subscribe((result) => {
      console.log(result);
      this.customers = result;
    }, (error) => {
      console.log(error);
    });
  }
  ngOnInit() {
  }

}
