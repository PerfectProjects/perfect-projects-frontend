import {Injectable} from '@angular/core';
import {JwtHelperService} from "@auth0/angular-jwt";
import {CookieService} from "ngx-cookie-service";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private accessToken: string = "";

  constructor(private cookie: CookieService) {
  }

  public setAuthorization(value: string) {
    const jwtHelper: JwtHelperService = new JwtHelperService();
    this.accessToken = value;
    if (this.cookie.check("username"))
      this.cookie.delete("username");
    this.cookie.set("username", jwtHelper.decodeToken(this.accessToken).username);
  }

  public getAccessToken() {
    return this.accessToken;
  }

  public getUsername() {
    return this.cookie.get("username");
  }
}
