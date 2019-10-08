import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http/src/response';
import { Observable } from 'rxjs';

import { Proces } from './proces';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class ShowProcessService {
  private products  = []; 
  // baseUrl:string = "https://xmltest.free.beeceptor.com";
  constructor(private httpService: HttpClient) { 

  }

   
   get_products(){
     let headers =new HttpHeaders();
    headers.append('Access-Control-Allow-Headers', 'Content-Type');
    headers.append('Access-Control-Allow-Methods', 'GET');
    headers.append('Access-Control-Allow-Origin', '*');
    return this.httpService.get('http://localhost:8082/hbpm/process/retrieve',{headers}).map(res => res as Proces[] || []);
}
// get_events(id):Observable<Event[]>{
//   const  params = new  HttpParams({fromString:  'id='+id});
//   let headers =new HttpHeaders();
//   headers.append('Access-Control-Allow-Headers', 'Content-Type');
//   headers.append('Access-Control-Allow-Methods', 'GET');
//   headers.append('Access-Control-Allow-Origin', '*');
//   return this.httpService.get<Event[]>('http://localhost:8082/hbpm/process/events/retrieve/{id}',{params}).map(res => res as Event[] || [])
// }

// save_events(eve,id){
//   const  params = new  HttpParams({fromString:  'id='+id});
//   let headers =new HttpHeaders();
//   headers.append('Access-Control-Allow-Headers', 'Content-Type');
//   headers.append('Access-Control-Allow-Methods', 'POST');
//   headers.append('Access-Control-Allow-Origin', '*');
//   return this.httpService.post('http://localhost:8082/hbpm/process/events?',eve,{params,headers}).map(res => res);
// }
}
