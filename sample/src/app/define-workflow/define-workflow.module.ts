import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DefineWorkflowRoutingModule } from './define-workflow-routing.module';
import { DefineWorkflowComponent } from './define-workflow.component';
import {
  ReactiveFormsModule,
  FormsModule,
  FormGroup,
  FormControl,
  Validators,
  FormArray,
  FormBuilder
} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [DefineWorkflowComponent],
  imports: [
    CommonModule,
    DefineWorkflowRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
  ]
  
})
export class DefineWorkflowModule { }
