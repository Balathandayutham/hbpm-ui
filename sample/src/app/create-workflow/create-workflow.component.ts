
import {  AfterContentInit,  OnInit , Component,  ElementRef,  OnDestroy,  ViewChild} from '@angular/core';
import Modeler from 'bpmn-js/lib/Modeler.js';
import propertiesPanelModule from 'bpmn-js-properties-panel';
import propertiesProviderModule from 'bpmn-js-properties-panel/lib/provider/camunda';
import * as camundaModdleDescriptor from 'camunda-bpmn-moddle/resources/camunda.json';
import { Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http';
import { Procestate } from './procestate';
import { CreateWorkflowService } from './create-workflow.service';
import { FormGroup, FormControl } from '@angular/forms';
import { createWriteStream, createReadStream } from 'fs';
@Component({
  selector: 'app-create-workflow',
  templateUrl: './create-workflow.component.html',
  styleUrls: ['./create-workflow.component.css']
})
export class CreateWorkflowComponent  implements OnInit {

  modeler: Modeler;
  public  proces : Procestate[] = []; 
  public procnm : string;
  public vernm : string;
  @ViewChild('canvas')
  private canvesRef: ElementRef<HTMLElement>;
  private xmlto : string;
  myform = new FormGroup({
    procname: new FormControl(),
    version: new FormControl()
}); 
  constructor(private http: HttpClient,private createWorkflowService:CreateWorkflowService){
    
  }

  ngOnInit(): void {
    console.log('Inside onInit')
    this.modeler = new Modeler({
      container: '#canvas',
      width: '100%',
      height: '600px',
      propertiesPanel: {
        parent: '#properties'
      },
      additionalModules: [
        propertiesPanelModule,
        propertiesProviderModule
      ],
      moddleExtensions: {
        camunda: camundaModdleDescriptor
      }
    });
    this.load();
    this.createWorkflowService.get_process().subscribe((res)=>{

      this.proces=res;
 });
  }

  load(): void {
    this.getExample().subscribe(data => {
      this.modeler.importXML(data, value => this.handleError(value));
    });
  }

  handleError(err: any) {
    if (err) {
      console.warn('Ups, error: ', err);
    }
  }

  public getExample(): Observable<string> {
    console.log('Inside getExample')
    const url = './assets/initial.bpmn'; // local
    return this.http.get(url, {responseType: 'text'});
  }

  save(): void {
    this.modeler.saveXML((err: any, xml: any) => this.xmlto=xml);
    console.log(this.xmlto);
    
    let file = new File([this.xmlto],  this.xmlto, {type: 'text/xml'});

   
 
    let formData = new FormData(); 
    formData.append('file', file , file .name); 
    this.procnm=this.myform.value.procname;
    this.vernm=this.myform.value.version;
    this.myform.reset();
      this.createWorkflowService.save_workflow(this.procnm,this.vernm,formData).subscribe((res)=>{

        
     
   });

  
 
  }

  

  
 
}
