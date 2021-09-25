import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PerfectProjectsComponent} from "./perfect-projects/perfect-projects.component";

const routes: Routes = [
  { path: '', component: PerfectProjectsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
