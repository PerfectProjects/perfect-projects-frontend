import {Injectable} from '@angular/core';
import {SignInUser} from "../models/sign-in-user";
import {HttpClient} from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class SignInService {

  constructor(private http: HttpClient) {
  }

  signIn = (signInUser: SignInUser) => {
    return this.http.post<{ payload: { accessToken: string, refreshToken: string }}>(
      "http://127.0.0.1:5000/sign-in",
      {"user": signInUser});
  }
}
