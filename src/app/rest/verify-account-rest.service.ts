import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class VerifyAccountRestService {
  constructor(private http: HttpClient) {
  }

  public sendCode = (confirmationCode: string, username: string) => {
    return this.http.post<{ success: boolean }>(
      `${environment.apiURL}//verify-account`,
      {"confirmationCode": confirmationCode, "username": username});
  }
}
