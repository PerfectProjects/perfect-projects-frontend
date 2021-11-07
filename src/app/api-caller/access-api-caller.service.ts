import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {ProjectData} from "../models/project-data";
import {SignInUser} from "../models/sign-in-user";
import {SignUpUser} from "../models/sign-up-user";

@Injectable({
  providedIn: 'root'
})
export class AccessApiCallerService {

  constructor(private http: HttpClient) {
  }

  public refreshToken(username: string) {
    return this.http.get<{payload:{ accessToken: string }}>(
      `${environment.apiURL}/access/refresh-token`,
      {headers: {"username": username}, withCredentials: true});
  }

  public signIn(signInUser: SignInUser) {
    const httpOptions = { withCredentials: true };
    return this.http.post<{ payload: { accessToken: string } }>(
      `${environment.apiURL}/access/sign-in`,
      {"user": signInUser},
      httpOptions);
  }

  public signUp(signUpUser: SignUpUser) {
    return this.http.post<{ success: boolean }>(
      `${environment.apiURL}/access/sign-up`,
      {"newUser": signUpUser});
  }

  public sendCode(confirmationCode: string, username: string) {
    return this.http.post<{ success: boolean }>(
      `${environment.apiURL}/access/verify-account`,
      {"confirmationCode": confirmationCode, "username": username});
  }
}
