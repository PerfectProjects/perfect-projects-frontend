import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class RefreshTokenService {

  constructor(private http: HttpClient) {
  }

  refresh = () => {
    return this.http.get<{accessToken: string}>(
      "http://127.0.0.1:5000/refresh-token",
      {withCredentials: true});
  }
}
