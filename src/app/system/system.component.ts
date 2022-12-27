import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { RestService } from '../rest.service';
import { StateService } from '../state.service';

@Component({
  selector: 'app-system',
  templateUrl: './system.component.html',
  styleUrls: ['./system.component.css']
})
export class SystemComponent implements OnInit {

  newTask: FormGroup;
  updatetask: FormGroup;
  index = -1;
  // org_id: any;
  constructor(private router: Router,
    public _rest: RestService,
    private route: ActivatedRoute, public toastr: ToastrService,
    public _state: StateService) {
    this.newTask = new FormGroup({
      system_name: new FormControl('', Validators.required),
      devices_id: new FormControl('', Validators.required),
      org_id: new FormControl('', Validators.required),
      org_location_id: new FormControl('', Validators.required),
      current_status: new FormControl('', Validators.required),

    });


    this.updatetask = new FormGroup({
      system_name: new FormControl('', Validators.required),
      devices_id: new FormControl('', Validators.required),
      org_id: new FormControl('', Validators.required),
      org_location_id: new FormControl('', Validators.required),
      current_status: new FormControl('', Validators.required),

    });
  }

  ngOnInit(): void {
    this.Getsysbyid();
  }

  isblank() {
    if (this.newTask.value.org_id === "" ||
      this.newTask.value.name === "" ||
      this.newTask.value.lat === "" ||
      this.newTask.value.longi === "" ||
      this.newTask.value.address === "" ||
      this.newTask.value.contact_person === "" ||
      this.newTask.value.contact_number === "") {
      return true;
    }
    return false;
  }

  add() {
    if (!this.isblank()) {
      console.log(this.newTask.value);
      this._rest.add_sys(this.newTask.value).subscribe((res: any) => {
        if (res.success === true) {
          alert('location Added Successfully');
          this.Getsysbyid();
          this.newTask.reset() //clear Form Value
        }
      }), (err: any) => {
        alert(err);
      }
    }
  }


  Getsysbyid() {
    this.route.params.subscribe(data => {
      this._state.org_location_id = data['org_location_id'];
      this._rest.getsysbyid(this._state.org_location_id).subscribe((result: any) => {
        this._state.system = result.data;
      }, (err) => {
        //show err tostr
        console.log(err);
      });
    })
  }

}
