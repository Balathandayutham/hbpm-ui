import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewWorkflowRoutingModule } from './view-workflow-routing.module';
import { ViewWorkflowComponent } from './view-workflow.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [ViewWorkflowComponent],
  imports: [
    CommonModule,
    ViewWorkflowRoutingModule,
    HttpClientModule
  ]
})
export class ViewWorkflowModule { }
