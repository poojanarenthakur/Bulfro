import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RestService } from './rest.service';

@Injectable({
  providedIn: 'root'
})
export class StateService {
  first_name = '';
  admin_info: any;
  admin = [] as any;
  org = [] as any;
  Card: null | string = null;
  locations: [] = [];
  org_id: null | any = null;
  system: [] = [];
  org_location_id: null | any = null;
  devices: [] = [];
  sys_id: null | any = null;
  index: any;
  users = [] as any;

  constructor(public _rest: RestService, private router: Router,
    private route: ActivatedRoute) { }

  updateorgData() {
    console.log("gatting org");
    this._rest.getallorg().subscribe((resp: any) => {
      console.log(resp);
      this.org = (resp as any)['data'];
      console.log(this.org);
    }, (err: any) => {
      console.log(err)
    });
  }
  updateusersData() {
    console.log("gatting users");
    this._rest.getallusers().subscribe((resp: any) => {
      console.log(resp);
      this.users = (resp as any)['data'];
      console.log(this.users);
    }, (err: any) => {
      console.log(err)
    });
  }
}








