import {
  HttpEvent,
  HttpHandler,
  HttpHeaders,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class InterceptorHttpHeadersService implements HttpInterceptor {
  constructor() {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    //token USERS
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `${localStorage.getItem('Token')}`,
    });
    const reqClon = req.clone({
      headers,
    });
    return next.handle(reqClon);
  }
}
