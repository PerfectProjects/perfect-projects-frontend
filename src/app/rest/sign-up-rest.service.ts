import {Injectable} from '@angular/core';
import {SignUpUser} from "../models/sign-up-user";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";


@Injectable({
  providedIn: 'root'
})
export class SignUpRestService {

  constructor(private http: HttpClient) {
  }

  createAccount = (signUpUser: SignUpUser) => {
    return this.http.post<{ success: boolean }>(
      `${environment.apiURL}/sign-up`,
      {"newUser": signUpUser});
  }
}
