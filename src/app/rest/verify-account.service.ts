import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class VerifyAccountService {
  constructor(private http: HttpClient) {
  }

  public sendCode = (verifyCode: string, authorization: string) => {
    return this.http.post<{ success: boolean }>(
      "http://127.0.0.1:5000/verify-account",
      {"verifyCode": verifyCode, "authorization": authorization});
  }
}
