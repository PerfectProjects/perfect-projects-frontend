import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PerfectProjectsComponent} from "./perfect-projects/perfect-projects.component";
import {ProjectListComponent} from "./perfect-projects/body/project-list/project-list.component";
import {SignUpComponent} from "./perfect-projects/body/sign-up/sign-up.component";
import {SignInComponent} from "./perfect-projects/body/sign-in/sign-in.component";
import {UserProfileComponent} from "./perfect-projects/body/user-profile/user-profile.component";
import {ProjectPageComponent} from "./perfect-projects/body/project-page/project-page.component";

const routes: Routes = [
  {
    path: '', component: PerfectProjectsComponent, children: [
      {path: '', component: ProjectListComponent},
      {path: 'sign-up', component: SignUpComponent},
      {path: 'sign-in', component: SignInComponent},
      {path: 'user-profile/:userId', component: UserProfileComponent},
      {path: 'project-page/:projectId', component: ProjectPageComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
