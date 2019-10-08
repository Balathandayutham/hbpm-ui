import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateStateRoutingModule } from './create-states-routing.module';
import { CreateStateComponent } from './create-states.component';
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
  declarations: [CreateStateComponent],
  imports: [
    CommonModule,
    CreateStateRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class CreateStateModule   {

  
}
