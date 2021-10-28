import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {ProjectData} from "../models/project-data";

@Injectable({
  providedIn: 'root'
})
export class MyProjectRestService {

  constructor(private http: HttpClient) {
  }

  public addProject = (projectData: ProjectData) => {
      return this.http.post<{success: boolean}>(
        `${environment.apiURL}/project/add-project`,
        {});
    }
}
