import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './main/header/header.component';
import { BodyComponent } from './main/body/body.component';
import { ProjectListComponent } from './main/body/project-list/project-list.component';
import { ProjectComponent } from './main/body/project-list/project/project.component';
import { ProjectThumbnailComponent } from './main/body/project-list/project/project-thumbnail/project-thumbnail.component';
import { ProjectDescriptionComponent } from './main/body/project-list/project/project-description/project-description.component';
import { ProjectStatsComponent } from './main/body/project-list/project/project-stats/project-stats.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    ProjectListComponent,
    ProjectComponent,
    ProjectThumbnailComponent,
    ProjectDescriptionComponent,
    ProjectStatsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
