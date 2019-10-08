import {  AfterContentInit,  OnInit , Component,  ElementRef,  OnDestroy,  ViewChild} from '@angular/core';
import Modeler from 'bpmn-js/lib/Modeler.js';
import propertiesPanelModule from 'bpmn-js-properties-panel';
import propertiesProviderModule from 'bpmn-js-properties-panel/lib/provider/camunda';
import * as camundaModdleDescriptor from 'camunda-bpmn-moddle/resources/camunda.json';
import { Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http';
import { CreateProcessService } from './define-workflow.service';
import { Proc } from './procesdefine';
import {
  ReactiveFormsModule,
  FormsModule,
  FormGroup,
  FormArray,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';

@Component({
  selector: 'app-define-workflow',
  templateUrl: './define-workflow.component.html',
  styleUrls: ['./define-workflow.component.css']
})
export class DefineWorkflowComponent implements OnInit {
  public  proces : Proc[] = []; 
  private productsObservable : Observable<any[]> ; 
  public curDate : Date;
  heroes: any[];
  myform = new FormGroup({
    processName: new FormControl(),
    processDescription: new FormControl(),
  
}); 

 
  constructor(private createProcessService:CreateProcessService,private _fb: FormBuilder) { 
    
  }

  ngOnInit() {
    this.curDate=new Date();
//      this.createProcessService.save_process.subscribe((res)=>{
//      this.proces=res;
      
//  });
 
  }
  OnSubmit() {
    if (this.myform.valid) {
      console.log( this.myform.value);
      this.proces=this.myform.value;
      this.createProcessService.save_process(this.proces).subscribe((res)=>{
        console.log( res);
              
          });
          alert("Process Saved Successfuly");
      this.myform.reset();
    }
  }
  reset() {

      this.myform.reset();
   
  }

 
  
  

  
}