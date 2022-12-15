import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import jwt_decode from "jwt-decode";
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private _http: HttpClient,
    private router: Router) { }


  checklocalstorage() {
    if (localStorage.getItem('createtoken')) {
      const createtoken = localStorage.getItem('createtoken');
      const decode: any = jwt_decode(createtoken as string);
      if (decode.exp > Date.now() / 1000) {
        if (decode.role === 'admin') {
          return true;
        } else {
          return decode.role;
        }
      } else {
        localStorage.removeItem('createtoken');
        this.router.navigate(['/login']);
      }
    } else {
      this.router.navigate(['/login']);
    }
  }

  login(data: any) {
    const url = environment.server_url + 'login/admin_login';
    return this._http.post(url, data);
  }
}
