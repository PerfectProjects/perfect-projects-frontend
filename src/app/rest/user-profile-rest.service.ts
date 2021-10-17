import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {UserProfileData} from "../models/user-profile-data";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class UserProfileRestService {

  constructor(private http: HttpClient) {
  }

  public getUser = (userId: string | null) => {
    if (userId) {
      return this.http.get<UserProfileData>(
        `${environment.apiURL}/get-user`,
        {headers: {"userId": userId}});
    }
    return;
  }
}
