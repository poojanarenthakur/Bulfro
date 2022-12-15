import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StateService } from '../state.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(public _router: Router,
    public state: StateService) { }

  ngOnInit(): void {
  }
  logout() {
    this.state.first_name = '';
    this.state.admin_info = null;
    localStorage.removeItem('createtoken');
    this._router.navigate(['/login']);
    alert("Thak you visit us again");
  }
}
