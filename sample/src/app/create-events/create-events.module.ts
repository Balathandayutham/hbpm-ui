import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateEventRoutingModule } from './create-events-routing.module';
import { CreateEventComponent } from './create-events.component';
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
  declarations: [CreateEventComponent],
  imports: [
    CommonModule,
    CreateEventRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class CreateEventsModule   {

  
}
