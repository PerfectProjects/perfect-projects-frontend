import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BodyComponent } from './perfect-projects/body/body.component';
import { ProjectListComponent } from './perfect-projects/body/project-list/project-list.component';
import { ProjectComponent } from './perfect-projects/body/project-list/project/project.component';
import { ProjectThumbnailComponent } from './perfect-projects/body/project-list/project/project-thumbnail/project-thumbnail.component';
import { ProjectDescriptionComponent } from './perfect-projects/body/project-list/project/project-description/project-description.component';
import { ProjectStatsComponent } from './perfect-projects/body/project-list/project/project-stats/project-stats.component';
import { PerfectProjectsComponent } from './perfect-projects/perfect-projects.component';
import { NavbarComponent } from "./perfect-projects/navbar/navbar.component";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SignInComponent } from './perfect-projects/body/sign-in/sign-in.component';
import { SignUpComponent } from './perfect-projects/body/sign-up/sign-up.component';
import {FormsModule} from "@angular/forms";

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
    SignUpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
