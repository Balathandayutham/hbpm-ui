import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
 
  constructor() { }

  login(userId, password):boolean{
    //TODO - actual implementation
    sessionStorage.setItem('token', 'authenticated');
    return this.isAuthenticated();
  }

  isAuthenticated():boolean{
    const token = sessionStorage.getItem('token');
    return token!=null ? true:false;
  }
}
