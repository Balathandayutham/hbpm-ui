
import {  AfterContentInit,  OnInit , Component,  ElementRef,  OnDestroy,  ViewChild} from '@angular/core';
import Modeler from 'bpmn-js/lib/Modeler.js';
import propertiesPanelModule from 'bpmn-js-properties-panel';
import propertiesProviderModule from 'bpmn-js-properties-panel/lib/provider/camunda';
import * as camundaModdleDescriptor from 'camunda-bpmn-moddle/resources/camunda.json';
import { Observable, empty } from 'rxjs';
import {HttpClient} from '@angular/common/http';
import { ShowProcessService } from './show-process.service';

import { Proces } from './Proces';
import {
  ReactiveFormsModule,
  FormsModule,
  FormGroup,
  FormArray,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-event',
  templateUrl: './show-process.component.html',
  styleUrls: ['./show-process.component.css']
})
export class ShowProcessComponent  implements OnInit {
  public  proces : Proces[] = []; 

  private productsObservable : Observable<any[]> ; 
  public heroes: Event[]=[];
  myform = new FormGroup({
    procname: new FormControl(),
    // itemRows: this._fb.array([this.initItemRows()])
}); 

 
  constructor(private showprocessService:ShowProcessService,private _fb: FormBuilder,private router:Router) { 
    
  }

  ngOnInit() {
   
    this.showprocessService.get_products().subscribe((res)=>{
      this.proces=res;
      
 });
  }
  onUpdate(customer){
    this.router.navigate(['show-workflow',customer])
  }
//   OnSubmit() {
//     if (this.myform.valid) {
     
      
//       for(let c of this.myform.get('itemRows').value){
        
//        if(c.id==""){
         
//           this.heroes.push(c);
//        }
        
//       }
      
//       this.showprocessService.save_events(this.heroes,this.myform.get('procname').value).subscribe((res)=>{
//         console.log(res);
        
//    });
//       this.myform.reset();
//     }
//   }
//   reset() {
//     for(let c of this.myform.get('itemRows').value){
//         var a=1;
//       this.formArr.removeAt(a);
//        a++;
//      }
//       this.myform.reset();
   
//   }

//   get formArr() {
//     return this.myform.get('itemRows') as FormArray;
//   }

//   initItemRows() {
//     return this._fb.group({
//       id : [''],
//     processId :[''],
//     eventName:[''],
//     eventDescription:[''],
   
//     });
//   }
//   addNewRow() {
//     this.formArr.push(this.initItemRows());
//   }

//   deleteRow(index: number) {
//     this.formArr.removeAt(index);
//   }
//   onChangeEvent(ev) {
//     for(let c of this.myform.get('itemRows').value){
//       var a=0;
//     this.formArr.removeAt(a);
//      a++;
//    }
//    this.formArr.push(this.initItemRows());
//     console.log(ev.target.value); // should print option1
//     this.setEmployeeValues(ev.target.value);
// }
//   setEmployeeValues(id) {
//     var a=1;
//     // this.heroes = [
//     //   { name: "event1", descripition: "event1"},
//     //   { name: "event2", descripition: "event2"}
//     // ]
//     this.showprocessService.get_events(id).subscribe((res)=>{
//       this.event=res;
    
//       for ( let c of this.event ){
//        if (a!=1){
//         this.formArr.push(this.initItemRows());
//        }
//         console.log(c);
//         a++;
//       }
//       this.formArr.setValue(
//         this.event
//        );
//   });
  
  
//    } 

  
}
