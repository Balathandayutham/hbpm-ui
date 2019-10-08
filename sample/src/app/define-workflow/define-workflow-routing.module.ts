import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefineWorkflowComponent } from './define-workflow.component';

const routes: Routes = [
  {path:'', component:DefineWorkflowComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DefineWorkflowRoutingModule { }
