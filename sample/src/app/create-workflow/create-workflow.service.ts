import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http/src/response';
import { Procestate } from './procestate';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
@Injectable({
  providedIn: 'root'
})
export class CreateWorkflowService {

  constructor(private httpService: HttpClient) {

   }

save_workflow(id,version,xml){
  
  let params = new HttpParams();
  params = params.append('createdBy', 'system');
    // Begin assigning parameters
    params = params.append('processId', id);
    params = params.append('version', version);
  let headers =new HttpHeaders();
  headers.append('Content-Type', 'multipart/form-data');
  headers.append('Access-Control-Allow-Methods', 'POST');
  headers.append('Access-Control-Allow-Origin', '*');
  
  return this.httpService.post('http://localhost:8082/hbpm/process/workflow?',xml,{params,headers}).map(res => res);

}
get_process(){
  let headers =new HttpHeaders();
 headers.append('Access-Control-Allow-Headers', 'Content-Type');
 headers.append('Access-Control-Allow-Methods', 'GET');
 headers.append('Access-Control-Allow-Origin', '*');
 return this.httpService.get('http://localhost:8082/hbpm/process/retrieve',{headers}).map(res => res as Procestate[] || []);
}
}
