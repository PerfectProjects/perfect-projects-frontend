import {Component, OnInit} from '@angular/core';
import {UserProfileApiCallerService} from "../../../../api-caller/user-profile-api-caller.service";
import {ProjectApiCallerService} from "../../../../api-caller/project-api-caller.service";
import {BasicProjectData} from "../../../../models/basic-project-data";
import {ProjectData} from "../../../../models/project-data";
import {ToastService} from "../../../../services/toast.service";
import {ToastState} from "../../../../enums/toast-state";

@Component({
  selector: 'app-my-project-list',
  templateUrl: './my-project-list.component.html',
  styleUrls: ['./my-project-list.component.css']
})
export class MyProjectListComponent implements OnInit {

  public projects?: BasicProjectData[];

  constructor(private userProfileApiCaller: UserProfileApiCallerService,
              private projectApiCaller: ProjectApiCallerService,
              private toast: ToastService) {
  }

  ngOnInit(): void {
    this.loadProjects();
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

  switchVisibility(basicProject: BasicProjectData) {
    const project: ProjectData = {
      author: "",
      briefDescription: "",
      description: "",
      mainPicture: "",
      title: "",
      timestamp: basicProject.timestamp,
      id: basicProject.id,
      visible: !basicProject.visible
    };
    this.projectApiCaller.updateProject(project)
      .subscribe((response) => {
        if (response.success) {
          if(!basicProject.visible) {
            this.toast.showMessage(`${basicProject.title} is now visible`, ToastState.INFO);
          } else {
            this.toast.showMessage(`${basicProject.title} is now hidden`, ToastState.INFO);
          }
          this.loadProjects();
        }
      });
  }

  private loadProjects() {
    this.userProfileApiCaller.getProjects().subscribe((response) => {
      if (response.projects !== undefined) {
        this.projects = [...response.projects];
        this.projects.forEach(project => {
          project.mainPicture = atob(project.mainPicture);
          project.briefDescription = atob(project.briefDescription);
        });
      }
    });
  }
}
