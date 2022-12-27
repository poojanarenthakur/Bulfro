import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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

  add_org(data: any) {
    if (this.checklocalstorage()) {
      const httpOption = {
        headers: new HttpHeaders({
          'Authorization': <string>localStorage.getItem('createtoken')
        })
      };
      // const createtoken = localStorage.getItem('createtoken');
      const url = environment.server_url + 'org/add_org';
      console.log(data);
      return this._http.post(url, data, httpOption);
    } else {
      return data;
    }

  }

  add_loc(data: any) {
    if (this.checklocalstorage()) {
      const httpOption = {
        headers: new HttpHeaders({
          'Authorization': <string>localStorage.getItem('createtoken')
        })
      };
      // const createtoken = localStorage.getItem('createtoken');
      const url = environment.server_url + 'org_location/add_org_location';
      console.log(data);
      return this._http.post(url, data, httpOption);
    } else {
      return data;
    }

  }

  add_sys(data: any) {
    if (this.checklocalstorage()) {
      const httpOption = {
        headers: new HttpHeaders({
          'Authorization': <string>localStorage.getItem('createtoken')
        })
      };
      // const createtoken = localStorage.getItem('createtoken');
      const url = environment.server_url + 'system/add_system';
      console.log(data);
      return this._http.post(url, data, httpOption);
    } else {
      return data;
    }

  }

  getallorg() {
    const httpOption = {
      headers: new HttpHeaders({
        'Authorization': <string>localStorage.getItem('createtoken')
      })
    }
    const createtoken = localStorage.getItem('createtoken');
    const url = environment.server_url + 'org/get_all_org';
    return this._http.get(url, httpOption);
  }

  getalllocation() {
    const httpOption = {
      headers: new HttpHeaders({
        'Authorization': <string>localStorage.getItem('createtoken')
      })
    }
    const createtoken = localStorage.getItem('createtoken');
    const url = environment.server_url + 'org_location/get_all_org_location';
    return this._http.get(url, httpOption);
  }

  getorgbyid(org_id: any) {
    const httpOption = {
      headers: new HttpHeaders({
        'Authorization': <string>localStorage.getItem('createtoken')
      })
    }
    const createtoken = localStorage.getItem('createtoken');
    const url = environment.server_url + `org/get_org/${org_id}`;
    return this._http.get(url, httpOption);
  }

  getlocbyid(org_id: any) {
    const httpOption = {
      headers: new HttpHeaders({
        'Authorization': <string>localStorage.getItem('createtoken')
      })
    }
    const createtoken = localStorage.getItem('createtoken');
    const url = environment.server_url + `org_location/get_org_location/${org_id}`;
    return this._http.get(url, httpOption);
  }

  getsysbyid(org_location_id: any) {
    const httpOption = {
      headers: new HttpHeaders({
        'Authorization': <string>localStorage.getItem('createtoken')
      })
    }
    const createtoken = localStorage.getItem('createtoken');
    const url = environment.server_url + `system/get_system/${org_location_id}`;
    return this._http.get(url, httpOption);
  }

  getdivicebyid(sys_id: any) {
    const httpOption = {
      headers: new HttpHeaders({
        'Authorization': <string>localStorage.getItem('createtoken')
      })
    }
    const createtoken = localStorage.getItem('createtoken');
    const url = environment.server_url + `devices/get_devices/${sys_id}`;
    return this._http.get(url, httpOption);
  }
}
