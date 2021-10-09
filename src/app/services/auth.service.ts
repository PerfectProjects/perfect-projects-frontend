import {Injectable} from '@angular/core';
import {CookieService} from "ngx-cookie-service";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authorization: string = "";

  constructor(private cookie: CookieService) {
  }

  public setRefreshToken(value: string) {
    this.cookie.delete("REFRESH_TOKEN");
    this.cookie.set("REFRESH_TOKEN", value, {sameSite: "Strict", secure: true, path: "/sign-in"});
  }

  public getRefreshToken() {
    return this.cookie.get("REFRESH_TOKEN");
  }

  public setAuthorization(value: string) {
    this.authorization = value;
  }

  public getAuthorization() {
    return this.authorization;
  }

  public getUsername() {
    const username = localStorage.getItem("username");
    return username != null ? username : "";
  }

  public setUsername(value: string) {
    localStorage.removeItem("username");
    localStorage.setItem("username", value);
  }
}
