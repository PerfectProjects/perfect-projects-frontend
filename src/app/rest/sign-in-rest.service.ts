import {Injectable} from '@angular/core';
import {SignInUser} from "../models/sign-in-user";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";


@Injectable({
  providedIn: 'root'
})
export class SignInRestService {

  constructor(private http: HttpClient) {
  }

  signIn = (signInUser: SignInUser) => {
    const httpOptions = { withCredentials: true };
    return this.http.post<{ payload: { accessToken: string } }>(
      `${environment.apiURL}/sign-in`,
      {"user": signInUser},
      httpOptions);
  }
}
