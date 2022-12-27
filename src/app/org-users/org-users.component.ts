import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { RestService } from '../rest.service';
import { StateService } from '../state.service';

@Component({
  selector: 'app-org-users',
  templateUrl: './org-users.component.html',
  styleUrls: ['./org-users.component.css']
})
export class OrgUsersComponent implements OnInit {
  newTask: FormGroup;
  updatetask: FormGroup;

  constructor(public _state: StateService,
    public _rest: RestService, public toastr: ToastrService,
    private router: Router, private route: ActivatedRoute) {

    this.newTask = new FormGroup({
      first_name: new FormControl('', Validators.required),
      last_name: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      mobile: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required),
      is_active: new FormControl('', Validators.required),
      org_id: new FormControl('', Validators.required),
      location_id: new FormControl('', Validators.required)
    });
    this.updatetask = new FormGroup({
      first_name: new FormControl('', Validators.required),
      last_name: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      mobile: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required),
      is_active: new FormControl('', Validators.required),
      org_id: new FormControl('', Validators.required),
      location_id: new FormControl('', Validators.required)
    });
  }

  ngOnInit(): void {
  }

  isblank() {
    if (this.newTask.value.first_name === "" ||
      this.newTask.value.last_name === "" ||
      this.newTask.value.email === "" ||
      this.newTask.value.username === "" ||
      this.newTask.value.password === "" ||
      this.newTask.value.mobile === "" ||
      this.newTask.value.address === "" ||
      this.newTask.value.is_active === "" ||
      this.newTask.value.org_id === "" ||
      this.newTask.value.location_id === ""
    ) {
      return true;
    }
    return false;
  }

  add() {
    if (!this.isblank()) {
      console.log(this.newTask.value);
      this._rest.add_users(this.newTask.value).subscribe((res: any) => {
        if (res.success === true) {
          alert('users Added Successfully');
          this._state.updateusersData();
          this.newTask.reset() //clear Form Value
        }
      }), (err: any) => {
        alert(err);
      }
    }
  }
}
