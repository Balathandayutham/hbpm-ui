import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShowWorkflowComponent } from './show-workflow.component'

const routes: Routes = [
  {path:'', component:ShowWorkflowComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShowWorkflowRoutingModule { }
