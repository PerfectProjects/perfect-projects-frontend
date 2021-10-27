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

  private readonly excludedUrls = [
    `${environment.apiURL}/refresh-token`,
    `${environment.apiURL}/sign-in`,
    `${environment.apiURL}/sign-up`,
  ];

  constructor(private refreshTokenRest: RefreshTokenRestService,
              private auth: AuthService) {
  }

  public intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (this.excludedUrls.includes(request.url) || this.auth.getUsername() === "") {
      return next.handle(request);
    }
    if (this.auth.getAccessToken() === "") {
      return this.handle401Error(request, next);
    }
    request = this.injectAccessToken(request);
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
        this.auth.setAuthorization(response.payload.accessToken);
        request = this.injectAccessToken(request);
        return next.handle(request);
      }),
      catchError(error => {
        return throwError(error);
      }));
  }

  private injectAccessToken(request: HttpRequest<any>) {
    return request.clone({
      headers: request.headers.set('accessToken', this.auth.getAccessToken()),
    });
  }
}
