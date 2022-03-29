import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HandleErrorServices } from './HandleErrorServicesApi.service';
import { catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class InterceptorsErrorsService implements HttpInterceptor {
  constructor(private error: HandleErrorServices) {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // returning an observable to complete the request cycle
    /* return new Observable((observer) => {
      next.handle(req).subscribe(
        (res:HttpResponse<any>) => {
          if (req instanceof HttpResponse) {
            observer.next(res);
          }
        },
        (err: HttpErrorResponse) => {
          this.error.handleError(err);
        }
      );
    });*/
    return next.handle(req).pipe(
      catchError((err) => {
        this.error.handleError(err);
        return throwError(err);
      })
    );
  }
}
