import {Component, OnInit} from '@angular/core';
import {UserProfileApiCallerService} from "../../../../api-caller/user-profile-api-caller.service";
import {ProjectData} from "../../../../models/project-data";
import {ProjectApiCallerService} from "../../../../api-caller/project-api-caller.service";

@Component({
  selector: 'app-my-project-list',
  templateUrl: './my-project-list.component.html',
  styleUrls: ['./my-project-list.component.css']
})
export class MyProjectListComponent implements OnInit {

  public projects?: ProjectData[];

  constructor(private userProfileApiCaller: UserProfileApiCallerService,
              private projectApiCaller: ProjectApiCallerService) {
  }

  ngOnInit(): void {
    this.userProfileApiCaller.getProjects().subscribe((response) => {
      this.projects = response.projects;
    });
  }

  onProjectDelete(projectId: string) {
    this.projectApiCaller.deleteProject(projectId).subscribe((response) => {
      if (response.success && this.projects !== undefined) {
        const index = this.projects.findIndex(x => x.id == projectId);
        this.projects.splice(index, 1);
        this.projects = [...this.projects];
      }
    });
  }
}
