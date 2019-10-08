import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service'
import { FormBuilder , FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import {
  ReactiveFormsModule,
  FormsModule,
 
  FormArray,
  FormControl
  
} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm : FormGroup;

  constructor(private _loginService : LoginService, private fb: FormBuilder, private _router:Router) { 
    if(this._loginService.isAuthenticated()){
      this._router.navigate(['home'])
    }
  }

  ngOnInit() {
    this.loginForm = this.fb.group({
      userId: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  doLogin(){
    let userId = this.loginForm.get('userId').value;
    let password = this.loginForm.get('password').value ;
    console.log(userId)
    console.log(password)
    if(this._loginService.login(userId,password)){
      console.log('logged in successfully...')
      this._router.navigate(['home'])
    }else{
      
    }
  }

  
}
