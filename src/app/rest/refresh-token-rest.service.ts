import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class RefreshTokenRestService {

  constructor(private http: HttpClient) {
  }

  refresh = (username: string) => {
    return this.http.get<{payload:{ accessToken: string }}>(`${environment.apiURL}/refresh-token`,
      {headers: {"username": username}, withCredentials: true});

  }
}
