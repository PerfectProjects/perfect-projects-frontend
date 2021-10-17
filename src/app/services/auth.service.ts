import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import { JwtHelperService } from "@auth0/angular-jwt";

@Injectable({
  providedIn: 'root'
})
export class AuthService implements HttpInterceptor {

  private authorization: string = "";

  constructor() {
  }

  public setAuthorization(value: string) {
    this.authorization = value;
  }

  public getAuthorization() {
    return this.authorization;
  }

//TODO read username from the token
  public getUsername() {
    const username = localStorage.getItem("username");
    return username != null ? username : "";
  }

  public setUsername(value: string) {
    localStorage.removeItem("username");
    localStorage.setItem("username", value);
  }

  private checkIfTokenExpired() {
    const helper = new JwtHelperService();
    const decodedToken = helper.decodeToken(this.authorization);
  }

//TODO make this works
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log("interceptor called!");
    this.checkIfTokenExpired();
    if (request.url == `${environment.apiURL}/refresh-token`) {
      return next.handle(request);
    }
    console.log(request);
    return next.handle(request);
    // return next.handle(request).pipe((res)=>{
    // },catchError((err) => {
    //   if (err.status === 401) {
    //     console.log("unauthorized");
    //     console.log(this.authorization);
    //     if (this.getAuthorization() == "") {//User should log in
    //       console.log("redirect here to the login");
    //       return throwError(err);
    //     }
    //     console.log("interceptor called");
    //     console.log(this.authorization);
    //     this.refreshTokenRest.refresh(this.getUsername())
    //       .subscribe(
    //         (response) => {
    //           this.setAuthorization(response.accessToken);
    //         },
    //         (error) => {
    //           if (error.status === 401) {
    //             console.log("refresh token expired");
    //             this.setAuthorization("");
    //             //TODO user must be logged out
    //           }
    //         });
    //   }
    //   return throwError(err);
    // });
  }
}
