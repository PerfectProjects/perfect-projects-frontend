import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() {
  }

  public getToken = () => {
    const token = localStorage.getItem("authorization");
     if(token)
       return token;
    else return "";
  }

  public setToken(value: string) {
    localStorage.removeItem("authorization");
    localStorage.setItem("authorization", value);
  }
}
