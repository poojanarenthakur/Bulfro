import { Component, OnInit } from '@angular/core';
import { Form } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RestService } from '../rest.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(private _rest: RestService,
    private toastr: ToastrService,
    public router: Router) {
    this.loginForm = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    })
  }

  ngOnInit(): void {
    if (localStorage.getItem('createtoken')) {
      this.router.navigate(['/dashboard']);
    } else {
      this.router.navigate(['/login']);
    }
  }

  login() {
    //debugger;
    if (this.loginForm.valid) {
      this._rest.login(this.loginForm.value).subscribe(resp => {
        this.toastr.success('Welcome...',);
        console.log(resp);
        const res = resp as any;
        if (res.success === true) {
          localStorage.setItem('createtoken', res.data);
          this.router.navigate(['/dashboard']);
        }
      },
        err => {
          console.log(err);
          this.toastr.error("Invalid username and password");
        })
    } else {
      this.toastr.error("Invalid Credential");
      alert("invalid credentials");
    }
  }
}
