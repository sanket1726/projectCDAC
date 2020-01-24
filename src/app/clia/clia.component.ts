import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-clia',
  templateUrl: './clia.component.html',
  styleUrls: ['./clia.component.css']
})
export class CliaComponent implements OnInit {

  constructor(public service: DataService, public auth: AuthService) {  }

  logOut() {
    this.auth.Logout();
  }

  ngOnInit() {
  }

}
