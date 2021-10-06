import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class VerifyAccountService {
  constructor(private http: HttpClient) {
  }

  public sendCode = (confirmationCode: string, username: string) => {
    return this.http.post<{ success: boolean }>(
      "http://127.0.0.1:5000/verify-account",
      {"confirmationCode": confirmationCode, "username": username});
  }
}
