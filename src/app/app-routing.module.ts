import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PerfectProjectsComponent} from "./perfect-projects/perfect-projects.component";
import {ProjectListComponent} from "./perfect-projects/body/project-list/project-list.component";
import {SignUpComponent} from "./perfect-projects/body/sign-up/sign-up.component";
import {SignInComponent} from "./perfect-projects/body/sign-in/sign-in.component";
import {MyProfileComponent} from "./perfect-projects/body/my-profile/my-profile.component";
import {ProjectPageComponent} from "./perfect-projects/body/project-page/project-page.component";
import {VerifyAccountComponent} from "./perfect-projects/body/verify-account/verify-account.component";

const routes: Routes = [
  {
    path: '', component: PerfectProjectsComponent, children: [
      {path: '', component: ProjectListComponent},
      {path: 'sign-up', component: SignUpComponent},
      {path: 'sign-in', component: SignInComponent},
      {path: 'my-profile', component: MyProfileComponent},
      {path: 'project-page/:projectId', component: ProjectPageComponent},
      {path: 'verify-account/:username', component: VerifyAccountComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
