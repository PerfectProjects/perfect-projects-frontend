import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {environment} from "../../environments/environment";
import {catchError, switchMap} from "rxjs/operators";
import {RefreshTokenRestService} from "../rest/refresh-token-rest.service";
import {AuthService} from "./auth.service";

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

  private readonly refreshTokenUrl = `${environment.apiURL}/refresh-token`;

  constructor(private refreshTokenRest: RefreshTokenRestService,
              private auth: AuthService) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log("interceptor called!");
    if (request.url == this.refreshTokenUrl) {
      return next.handle(request);
    }

    return next.handle(request).pipe(catchError(error => {
        if (error.status === 401) {
          return this.handle401Error(request, next);
        }
        return throwError(error);
      })
    );
  }
  private handle401Error(request: HttpRequest<any>, next: HttpHandler) {
    return this.refreshTokenRest.refresh(this.auth.getUsername()).pipe(
     switchMap((response: any) => {
       console.log(" handle401");
      this.auth.setAuthorization(response.payload.accessToken);
      return next.handle(request);
    }),
      catchError(error => {
        console.log("refresh token expired");
        return throwError(error);
      }));
  }
}
