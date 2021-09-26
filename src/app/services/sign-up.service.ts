import {Injectable} from '@angular/core';
import {SignUpUser} from "../models/sign-up-user";
import {HttpClient} from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class SignUpService {

  constructor(private http: HttpClient) {
  }

  createAccount = (signUpUser: SignUpUser) => {
    console.log("createAccount called");

    this.http.post("http://127.0.0.1:5000/sign-up", {"newUser": signUpUser}).subscribe(
      (response) => {
        // TODO Handle response from the server
        console.log("Response!");
        console.log(response);
      }
    );
  }
}
