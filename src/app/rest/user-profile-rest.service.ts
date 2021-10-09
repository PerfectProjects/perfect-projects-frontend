import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {UserProfileData} from "../models/user-profile-data";

@Injectable({
  providedIn: 'root'
})
export class UserProfileRestService {

  constructor(private http: HttpClient) {
  }

  public getUser = (userId: string | null) => {
    if (userId) {
      return this.http.get<UserProfileData>(
        "http://127.0.0.1:5000/get-user",
        {headers: {"userId": userId}});
    }
    return;
  }
}
