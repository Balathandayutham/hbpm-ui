import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShowProcessComponent } from './show-process.component'

const routes: Routes = [
  {path:'', component:ShowProcessComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShowProcessRoutingModule { }
