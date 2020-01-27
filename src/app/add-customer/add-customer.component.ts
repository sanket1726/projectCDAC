import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {
  agent:any;
  constructor(public service: DataService,
              public router: Router) {
              this.agent = JSON.parse(window.sessionStorage.getItem('object'));
              }

  customer: any;

  addCustomer(formData) {

    console.log(formData.form.value);
    let c = formData.form.value;

    console.log(c);
    this.service.addCustomer(this.agent.agentId , c).subscribe((result) => {
      console.log()
      console.log(result);
      this.router.navigate(['/agent']);
    });
  }

  ngOnInit() {
  }

}
