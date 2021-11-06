import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {ProjectData} from "../models/project-data";

@Injectable({
  providedIn: 'root'
})
export class ProjectRestService {

  constructor(private http: HttpClient) {
  }

  public getProject = (projectId: string) => {
      return this.http.get<ProjectData>(
        `${environment.apiURL}/project`,
        {params:{id: projectId}});
    }
}
