import {Injectable} from '@angular/core';
import {SignUpUser} from "../models/sign-up-user";
import {HttpClient} from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class SignUpRestService {

  constructor(private http: HttpClient) {
  }

  createAccount = (signUpUser: SignUpUser) => {
    return this.http.post<{ success: boolean }>(
      "http://127.0.0.1:5000/sign-up",
      {"newUser": signUpUser});
  }
}
