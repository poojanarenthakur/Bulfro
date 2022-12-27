import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RestService } from '../rest.service';
import { ToastrService } from 'ngx-toastr';
import { StateService } from '../state.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-locations-sites',
  templateUrl: './locations-sites.component.html',
  styleUrls: ['./locations-sites.component.css']
})
export class LocationsSitesComponent implements OnInit {

  newTask: FormGroup;
  updatetask: FormGroup;
  // index = 0;

  constructor(private router: Router,
    public _rest: RestService,
    private route: ActivatedRoute, public toastr: ToastrService,
    public _state: StateService) {

    this.newTask = new FormGroup({
      org_id: new FormControl('', Validators.required),
      name: new FormControl('', Validators.required),
      lat: new FormControl('', Validators.required),
      lng: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required),
      contact_person: new FormControl('', Validators.required),
      contact_number: new FormControl('', Validators.required)
    });

    this.updatetask = new FormGroup({
      org_id: new FormControl('', Validators.required),
      name: new FormControl('', Validators.required),
      lat: new FormControl('', Validators.required),
      lng: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required),
      contact_person: new FormControl('', Validators.required),
      contact_number: new FormControl('', Validators.required)
    });
  }

  ngOnInit(): void {
    // this._state.updatelocData();
    // dynamic routing find locations of organization
    this.GetLocbyid();
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
      this._rest.add_loc(this.newTask.value).subscribe((res: any) => {
        if (res.success === true) {
          alert('location Added Successfully');
          this.GetLocbyid();
          this.newTask.reset() //clear Form Value
        }
      }), (err: any) => {
        alert(err);
      }
    }
  }

  GetLocbyid() {
    this.route.params.subscribe(data => {
      this._state.org_id = data['org_id'];
      this._state.index = data['org_id'];
      this._rest.getlocbyid(this._state.org_id).subscribe((result: any) => {
        this._state.locations = result.data;
      }, (err) => {
        //show err tostr
        console.log(err);
      });
    })
  }

}