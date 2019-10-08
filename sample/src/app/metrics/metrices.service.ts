import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http/src/response';
import { Observable } from 'rxjs';

import { Totalproc } from './totalproces';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class MetricesService {
  private Totalproc  = []; 

  constructor(private httpService: HttpClient) { 

  }

   
   get_products(){
     let headers =new HttpHeaders();
    headers.append('Access-Control-Allow-Headers', 'Content-Type');
    headers.append('Access-Control-Allow-Methods', 'GET');
    headers.append('Access-Control-Allow-Origin', '*');
    return this.httpService.get('http://localhost:8082/hbpm/process/retrieve',{headers}).map(res => res as Totalproc[] || []);
}

}
