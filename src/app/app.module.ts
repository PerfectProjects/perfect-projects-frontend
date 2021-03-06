import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BodyComponent} from './perfect-projects/body/body.component';
import {ProjectListComponent} from './perfect-projects/body/project-list/project-list.component';
import {ProjectComponent} from './shared-components/project/project.component';
import {ProjectThumbnailComponent} from './shared-components/project/project-thumbnail/project-thumbnail.component';
import {ProjectDescriptionComponent} from './shared-components/project/project-description/project-description.component';
import {ProjectStatsComponent} from './shared-components/project/project-stats/project-stats.component';
import {PerfectProjectsComponent} from './perfect-projects/perfect-projects.component';
import {NavbarComponent} from "./perfect-projects/navbar/navbar.component";
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {SignInComponent} from './perfect-projects/body/sign-in/sign-in.component';
import {SignUpComponent} from './perfect-projects/body/sign-up/sign-up.component';
import {FormsModule} from "@angular/forms";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {ProjectPageComponent} from './perfect-projects/body/project-page/project-page.component';
import {MyProfileComponent} from './perfect-projects/body/my-profile/my-profile.component';
import {VerifyAccountComponent} from './perfect-projects/body/verify-account/verify-account.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ToastrModule} from "ngx-toastr";
import {ToastComponent} from './perfect-projects/body/toast/toast.component';
import {InterceptorService} from "./services/interceptor.service";
import {CookieService} from 'ngx-cookie-service';
import {AddProjectComponent} from './perfect-projects/body/my-profile/add-project/add-project.component';
import {MyProjectListComponent} from './perfect-projects/body/my-profile/my-project-list/my-project-list.component';
import {QuillModule} from "ngx-quill";
import { ImageCropperModule } from 'ngx-image-cropper';
import { EditProjectComponent } from './perfect-projects/body/my-profile/edit-project/edit-project.component';
import { SavedProjectsComponent } from './perfect-projects/body/my-profile/saved-projects/saved-projects.component';
import { NotFoundComponent } from './perfect-projects/body/not-found/not-found.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BodyComponent,
    ProjectListComponent,
    ProjectComponent,
    ProjectThumbnailComponent,
    ProjectDescriptionComponent,
    ProjectStatsComponent,
    PerfectProjectsComponent,
    SignInComponent,
    SignUpComponent,
    ProjectPageComponent,
    MyProfileComponent,
    VerifyAccountComponent,
    ToastComponent,
    AddProjectComponent,
    MyProjectListComponent,
    EditProjectComponent,
    SavedProjectsComponent,
    NotFoundComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      toastComponent: ToastComponent,
    }),
    QuillModule.forRoot(),
    ImageCropperModule
  ],
  providers: [
    [CookieService],
    {provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true}],
  entryComponents: [ToastComponent],
  bootstrap: [AppComponent],
})
export class AppModule {
}
