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



  // updatelocData() {
  //   console.log("gatting location");
  //   this.route.params.subscribe(data => {
  //     this.org_id = data['org_id'];
  //     this._rest.getlocbyid(this.org_id).subscribe((resp: any) => {
  //       console.log(resp);
  //       this.locations = (resp as any)['data'];
  //       console.log(this.locations);
  //     }, (err: any) => {
  //       console.log(err)
  //     });
  //   });
  // }
  // updatelocData() {
  //   console.log("gatting location");
  //   this._rest.getalllocation().subscribe((resp: any) => {
  //     console.log(resp);
  //     this.locations = (resp as any)['data'];
  //     console.log(this.locations);
  //   }, (err: any) => {
  //     console.log(err)
  //   });

}





