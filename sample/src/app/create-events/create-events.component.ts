
import {  AfterContentInit,  OnInit , Component,  ElementRef,  OnDestroy,  ViewChild} from '@angular/core';
import Modeler from 'bpmn-js/lib/Modeler.js';
import propertiesPanelModule from 'bpmn-js-properties-panel';
import propertiesProviderModule from 'bpmn-js-properties-panel/lib/provider/camunda';
import * as camundaModdleDescriptor from 'camunda-bpmn-moddle/resources/camunda.json';
import { Observable, empty } from 'rxjs';
import {HttpClient} from '@angular/common/http';
import { CreateEventService } from './create-events.service';
import { Event } from './event';
import { Proc } from './proc';
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
  selector: 'app-create-event',
  templateUrl: './create-events.component.html',
  styleUrls: ['./create-events.component.css']
})
export class CreateEventComponent  implements OnInit {
  public  proces : Proc[] = []; 
  public  event : Event[] = []; 
  private productsObservable : Observable<any[]> ; 
  public heroes: Event[]=[];
  myform = new FormGroup({
    procname: new FormControl(),
    itemRows: this._fb.array([this.initItemRows()])
}); 

 
  constructor(private createEventService:CreateEventService,private _fb: FormBuilder) { 
    
  }

  ngOnInit() {
   
    this.createEventService.get_products().subscribe((res)=>{
      this.proces=res;
      
 });
 
  }
  OnSubmit() {
    if (this.myform.valid) {
     
      
      for(let c of this.myform.get('itemRows').value){
        
       if(c.id==""){
         
          this.heroes.push(c);
       }
        
      }
      
      this.createEventService.save_events(this.heroes,this.myform.get('procname').value).subscribe((res)=>{
        console.log(res);
        
   });
      this.myform.reset();
    }
  }
  reset() {
    for(let c of this.myform.get('itemRows').value){
        var a=1;
      this.formArr.removeAt(a);
       a++;
     }
      this.myform.reset();
   
  }

  get formArr() {
    return this.myform.get('itemRows') as FormArray;
  }

  initItemRows() {
    return this._fb.group({
      id : [''],
    processId :[''],
    eventName:[''],
    eventDescription:[''],
   
    });
  }
  addNewRow() {
    this.formArr.push(this.initItemRows());
  }

  deleteRow(index: number) {
    this.formArr.removeAt(index);
  }
  onChangeEvent(ev) {
    for(let c of this.myform.get('itemRows').value){
      var a=0;
    this.formArr.removeAt(a);
     a++;
   }
   this.formArr.push(this.initItemRows());
    console.log(ev.target.value); // should print option1
    this.setEmployeeValues(ev.target.value);
}
  setEmployeeValues(id) {
    var a=1;
    // this.heroes = [
    //   { name: "event1", descripition: "event1"},
    //   { name: "event2", descripition: "event2"}
    // ]
    this.createEventService.get_events(id).subscribe((res)=>{
      this.event=res;
    
      for ( let c of this.event ){
       if (a!=1){
        this.formArr.push(this.initItemRows());
       }
        console.log(c);
        a++;
      }
      this.formArr.setValue(
        this.event
       );
  });
  
  
   } 

  
}
