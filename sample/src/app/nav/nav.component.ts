import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login/login.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private _loginService: LoginService) { }

  ngOnInit() {
  }

  isAuthenticated():boolean{
    return this._loginService.isAuthenticated();
  }
//   logout(){
//     window.location.href='/login';
// }
}
