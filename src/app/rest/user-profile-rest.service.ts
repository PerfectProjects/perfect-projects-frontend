import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {UserProfileData} from "../models/user-profile-data";
import {environment} from "../../environments/environment";
import {ProjectData} from "../models/project-data";

@Injectable({
  providedIn: 'root'
})
export class UserProfileRestService {

  constructor(private http: HttpClient) {
  }

  public getProjects = () => {
      return this.http.get<UserProfileData>(
        `${environment.apiURL}/user-profile`);
    }

  public addProject = (projectData: ProjectData) => {
    return this.http.post<{success: boolean}>(
      `${environment.apiURL}/user-profile/add-project`,
      {"projectData": projectData});
  }
}
