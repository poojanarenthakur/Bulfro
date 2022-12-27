import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { RestService } from '../rest.service';
import { StateService } from '../state.service';

@Component({
  selector: 'app-organisation',
  templateUrl: './organisation.component.html',
  styleUrls: ['./organisation.component.css']
})
export class OrganisationComponent implements OnInit {
  newTask: FormGroup;
  updatetask: FormGroup;
  index = -1;

  constructor(public _state: StateService,
    public _rest: RestService, public toastr: ToastrService,
    private router: Router, private route: ActivatedRoute
  ) {
    this.newTask = new FormGroup({
      org_name: new FormControl('', Validators.required),
      lat: new FormControl('', Validators.required),
      lng: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required),
      contact_person: new FormControl('', Validators.required),
      contact_number: new FormControl('', Validators.required)
    });
    this.updatetask = new FormGroup({
      org_name: new FormControl('', Validators.required),
      lat: new FormControl('', Validators.required),
      lng: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required),
      contact_person: new FormControl('', Validators.required),
      contact_number: new FormControl('', Validators.required)
    });
  }

  ngOnInit(): void {

  }


  isblank() {
    if (this.newTask.value.org_name === "" ||
      this.newTask.value.lat === "" ||
      this.newTask.value.lng === "" ||
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
      this._rest.add_org(this.newTask.value).subscribe((res: any) => {
        if (res.success === true) {
          alert('org Added Successfully');
          this._state.updateorgData();
          this.newTask.reset() //clear Form Value
        }
      }), (err: any) => {
        alert(err);
      }
    }
  }

}
