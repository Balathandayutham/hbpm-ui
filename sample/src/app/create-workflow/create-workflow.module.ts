import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateWorkflowRoutingModule } from './create-workflow-routing.module';
import { CreateWorkflowComponent } from './create-workflow.component';
import { HttpClientModule } from '@angular/common/http';
import {
  ReactiveFormsModule,
  FormsModule,
  FormGroup,
  FormControl,
  Validators,
  FormArray,
  FormBuilder
} from '@angular/forms';
@NgModule({
  declarations: [CreateWorkflowComponent],
  imports: [
    CommonModule,
    CreateWorkflowRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class CreateWorkflowModule   {

  
}
