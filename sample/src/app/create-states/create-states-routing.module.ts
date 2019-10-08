import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateStateComponent } from './create-states.component'

const routes: Routes = [
  {path:'', component:CreateStateComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateStateRoutingModule { }
