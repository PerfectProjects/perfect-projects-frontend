import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ProjectRestService} from "../../../rest/project-rest.service";
import {ProjectData} from "../../../models/project-data";

@Component({
  selector: 'app-project-page',
  templateUrl: './project-page.component.html',
  styleUrls: ['./project-page.component.css']
})
export class ProjectPageComponent implements OnInit {

  public project : ProjectData | undefined;

  constructor(private route: ActivatedRoute,
              private projectRest: ProjectRestService) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(paramMap => {
      const projectId = paramMap.get("projectId");
      if (projectId != null) {
        this.projectRest.getProject(projectId).subscribe((response)=>{
           if (response.description) {
             this.project = {
               id: response.id,
               title: response.title,
               author: response.author,
               description: atob(response.description)
             };
           }
        });
      }
    });
  }
}
