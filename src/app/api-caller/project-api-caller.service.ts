import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {ProjectData} from "../models/project-data";

@Injectable({
  providedIn: 'root'
})
export class ProjectApiCallerService {

  constructor(private http: HttpClient) {
  }

  public addProject(projectData: ProjectData){
    return this.http.post<{success: boolean}>(
      `${environment.apiURL}/project`,
      {"projectData": projectData});
  }

  public deleteProject(projectId: string) {
    return this.http.delete<{success: boolean}>(
      `${environment.apiURL}/project`,
      {body: {projectId: projectId}});
  }

  public getProject(projectId: string){
      return this.http.get<ProjectData>(
        `${environment.apiURL}/project`,
        {params:{id: projectId}});
    }
}
