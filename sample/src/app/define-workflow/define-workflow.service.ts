import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http/src/response';
import { Observable } from 'rxjs';
import { Proc } from './procesdefine';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class CreateProcessService {
  private products  = []; 
  baseUrl:string = "https://xmltest.free.beeceptor.com";
  constructor(private httpService: HttpClient) { 

  }

   
   save_process(proc : any[]){
     let headers =new HttpHeaders();
    headers.append('Access-Control-Allow-Headers', 'Content-Type');
    headers.append('Access-Control-Allow-Methods', 'POST');
    headers.append('Access-Control-Allow-Origin', '*');
    return this.httpService.post('http://localhost:8082/hbpm/process',proc,{headers}).map(res => res);
}

}
