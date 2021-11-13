import {Component, OnInit} from '@angular/core';
import {ProjectApiCallerService} from "../../../api-caller/project-api-caller.service";
import {BasicProjectData} from "../../../models/basic-project-data";

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {

  projects: BasicProjectData[] = [];

  constructor(private projectApiCaller: ProjectApiCallerService) {
  }

  ngOnInit(): void {
    this.projectApiCaller.getProjectPage(1).subscribe((response) => {
      console.log(response);
      this.projects = response.projects;
      this.projects.forEach(project => {
        project.mainPicture = atob(project.mainPicture);
        project.briefDescription = atob(project.briefDescription);
      });
    });
  }

}
