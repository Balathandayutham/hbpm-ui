import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShowProcessRoutingModule } from './show-process-routing.module';
import { ShowProcessComponent } from './show-process.component';
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
  declarations: [ShowProcessComponent],
  imports: [
    CommonModule,
    ShowProcessRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class ShowProcessModule   {

  
}
