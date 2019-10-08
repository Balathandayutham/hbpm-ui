import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {path:'login', loadChildren:'./login/login.module#LoginModule'},
  {path:'define-workflow', loadChildren:'./define-workflow/define-workflow.module#DefineWorkflowModule'},
  {path:'create-workflow', loadChildren:'./create-workflow/create-workflow.module#CreateWorkflowModule'},
  {path:'view-workflow', loadChildren:'./view-workflow/view-workflow.module#ViewWorkflowModule'},
  {path:'create-events', loadChildren:'./create-events/create-events.module#CreateEventsModule'},
  {path:'create-states', loadChildren:'./create-states/create-states.module#CreateStateModule'},
  {path:'show-process', loadChildren:'./show-process/show-process.module#ShowProcessModule'},
  {path:'show-workflow', loadChildren:'./show-workflow/show-workflow.module#ShowWorkflowModule'},
  {path:'home', loadChildren:'./home/home.module#HomeModule'},
  {path:'**', redirectTo:'login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),ReactiveFormsModule,FormsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
