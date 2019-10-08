import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MetricsRoutingModule } from './metrics-routing.module';
import { MetricsComponent } from './metrics.component';
import { ChartsModule } from 'ng2-charts'

@NgModule({
  declarations: [MetricsComponent],
  imports: [
    CommonModule,
    MetricsRoutingModule,
    ChartsModule
  ],
  exports:[MetricsComponent]
})
export class MetricsModule { }
