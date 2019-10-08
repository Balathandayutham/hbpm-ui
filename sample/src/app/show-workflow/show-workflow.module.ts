import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShowWorkflowRoutingModule } from './show-workflow-routing.module';
import { ShowWorkflowComponent } from './show-workflow.component';
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
  declarations: [ShowWorkflowComponent],
  imports: [
    CommonModule,
    ShowWorkflowRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class ShowWorkflowModule   {

  
}
