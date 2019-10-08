import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewWorkflowComponent } from './view-workflow.component';

const routes: Routes = [
  {path:'', component:ViewWorkflowComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewWorkflowRoutingModule { }
