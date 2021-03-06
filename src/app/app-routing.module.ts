import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PerfectProjectsComponent} from "./perfect-projects/perfect-projects.component";
import {ProjectListComponent} from "./perfect-projects/body/project-list/project-list.component";
import {SignUpComponent} from "./perfect-projects/body/sign-up/sign-up.component";
import {SignInComponent} from "./perfect-projects/body/sign-in/sign-in.component";
import {MyProfileComponent} from "./perfect-projects/body/my-profile/my-profile.component";
import {ProjectPageComponent} from "./perfect-projects/body/project-page/project-page.component";
import {VerifyAccountComponent} from "./perfect-projects/body/verify-account/verify-account.component";
import {AddProjectComponent} from "./perfect-projects/body/my-profile/add-project/add-project.component";
import {MyProjectListComponent} from "./perfect-projects/body/my-profile/my-project-list/my-project-list.component";
import {EditProjectComponent} from "./perfect-projects/body/my-profile/edit-project/edit-project.component";
import {SavedProjectsComponent} from "./perfect-projects/body/my-profile/saved-projects/saved-projects.component";
import {NotFoundComponent} from "./perfect-projects/body/not-found/not-found.component";
import {AuthGuardService} from "./services/auth-guard.service";

const routes: Routes = [
  {
    path: '', component: PerfectProjectsComponent, children: [
      {path: '', component: ProjectListComponent},
      {path: 'sign-up', component: SignUpComponent},
      {path: 'sign-in', component: SignInComponent},
      {
        path: 'my-profile', canActivate: [AuthGuardService], component: MyProfileComponent,
        children: [
          {path: '', component: MyProjectListComponent},
          {path: 'add-project', component: AddProjectComponent},
          {path: 'edit-project/:projectId', component: EditProjectComponent},
          {path: 'saved-projects', component: SavedProjectsComponent}
        ]
      },
      {path: 'project/:projectId', component: ProjectPageComponent},
      {path: 'verify-account/:username', component: VerifyAccountComponent},
      {path: 'not-found', component: NotFoundComponent},
      {path: '**', redirectTo: 'not-found'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
