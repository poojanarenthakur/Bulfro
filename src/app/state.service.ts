import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StateService {
  first_name = '';
  admin_info: any;
  admin = [] as any;
  constructor() { }
}
