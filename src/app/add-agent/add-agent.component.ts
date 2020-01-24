import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-agent',
  templateUrl: './add-agent.component.html',
  styleUrls: ['./add-agent.component.css']
})
export class AddAgentComponent implements OnInit {

  constructor(public dataService: DataService , public router: Router) { }

   noOfCustomers = '0';
   noOfPolicies = '0';
  agent: any;


  add(formData) {
    console.log(formData.form.value);
    let a = formData.form.value;

    console.log(a);
    this.dataService.addAgent(a).subscribe((result) => {
      console.log(result);
      this.router.navigate(['/clia']);
    });
  }
  ngOnInit() {
  }

}
