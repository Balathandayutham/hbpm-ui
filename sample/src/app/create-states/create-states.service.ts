import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { State } from './states';
import { Procestate } from './procestate';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
@Injectable({
  providedIn: 'root'
})
export class CreateStateService {

  private products  = []; 
  baseUrl:string = "https://xmltest.free.beeceptor.com";
  constructor(private httpService: HttpClient) { 

  }

   
   
  get_process(){
    let headers =new HttpHeaders();
   headers.append('Access-Control-Allow-Headers', 'Content-Type');
   headers.append('Access-Control-Allow-Methods', 'GET');
   headers.append('Access-Control-Allow-Origin', '*');
   return this.httpService.get('http://localhost:8082/hbpm/process/retrieve',{headers}).map(res => res as Procestate[] || []);
}
get_states(id):Observable<State[]>{
 const  params = new  HttpParams({fromString:  'id='+id});
 let headers =new HttpHeaders();
 headers.append('Access-Control-Allow-Headers', 'Content-Type');
 headers.append('Access-Control-Allow-Methods', 'GET');
 headers.append('Access-Control-Allow-Origin', '*');
 return this.httpService.get<State[]>('http://localhost:8082/hbpm/process/states/retrieve/{id}',{params}).map(res => res as State[] || [])
}

save_states(eve,id){
 const  params = new  HttpParams({fromString:  'id='+id});
 let headers =new HttpHeaders();
 headers.append('Access-Control-Allow-Headers', 'Content-Type');
 headers.append('Access-Control-Allow-Methods', 'POST');
 headers.append('Access-Control-Allow-Origin', '*');
 return this.httpService.post('http://localhost:8082/hbpm/process/states?',eve,{params,headers}).map(res => res);
}
}
