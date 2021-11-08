import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ProjectApiCallerService} from "../../../api-caller/project-api-caller.service";
import {ProjectData} from "../../../models/project-data";

@Component({
  selector: 'app-project-page',
  templateUrl: './project-page.component.html',
  styleUrls: ['./project-page.component.css']
})
export class ProjectPageComponent implements OnInit {

  public project: ProjectData | undefined;

  constructor(private route: ActivatedRoute,
              private projectRest: ProjectApiCallerService) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(paramMap => {
      const projectId = paramMap.get("projectId");
      if (projectId != null) {
        this.projectRest.getProject(projectId).subscribe((response) => {
          if (response.description) {
            if (!response.mainPhoto)
              response.mainPhoto = "";

            this.project = {
              id: response.id,
              title: response.title,
              author: response.author,
              description: atob(response.description),
              briefDescription: atob(response.briefDescription),
              mainPhoto: atob(response.mainPhoto),
              visible: response.visible
            };
          }
        });
      }
    });
  }
}
