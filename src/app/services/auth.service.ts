import {Injectable} from '@angular/core';
import {JwtHelperService} from "@auth0/angular-jwt";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private authorization: string = "";
  private jwtHelper: JwtHelperService = new JwtHelperService();

  public setAuthorization(value: string) {
    this.authorization = value;
  }

  public getAuthorization() {
    return this.authorization;
  }

  public getUsername() {
    if (this.authorization !== "") {
      return this.jwtHelper.decodeToken(this.authorization).username;
    }
    return "";
  }
}
