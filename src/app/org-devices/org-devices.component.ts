import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { RestService } from '../rest.service';
import { StateService } from '../state.service';

@Component({
  selector: 'app-org-devices',
  templateUrl: './org-devices.component.html',
  styleUrls: ['./org-devices.component.css']
})
export class OrgDevicesComponent implements OnInit {

  constructor(private router: Router,
    public _rest: RestService,
    private route: ActivatedRoute, public toastr: ToastrService,
    public _state: StateService) { }

  ngOnInit(): void {
    this.GetLocbyid();
  }
  GetLocbyid() {
    this.route.params.subscribe(data => {
      this._state.sys_id = data['sys_id'];
      this._rest.getdivicebyid(this._state.org_id).subscribe((result: any) => {
        this._state.devices = result.data;
      }, (err) => {
        //show err tostr
        console.log(err);
      });
    })
  }
}
