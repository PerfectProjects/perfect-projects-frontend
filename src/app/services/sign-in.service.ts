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
    console.log("createAccount called");

    this.http.post("http://127.0.0.1:5000/sign-in", {"user": signInUser}).subscribe(
      (response) => {
        // TODO Handle response from the server
        console.log("Response!");
        console.log(response);
      }
    );
  }
}
