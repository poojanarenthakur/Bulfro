import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StateService } from '../state.service';
import jwt_decode from "jwt-decode";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(public state: StateService,
    public router: Router) { }

  ngOnInit(): void {
    if (localStorage.getItem('createtoken')) {
      const createtoken = <string>localStorage.getItem('createtoken');
      const decode = this.getdecodedaccesstoken(createtoken);
      console.log(decode);
      this.state.first_name = decode.first_name;
      this.state.admin_info = decode;
    } else {
      this.state.first_name = '';
      this.state.admin_info = null;
      this.router.navigate(['/login']);

    }
    this.state.updateData();
  }
  getdecodedaccesstoken(createtoken: string): any {
    try {
      return jwt_decode(createtoken);
    } catch (error) {
      return null;
    }
  }
}


