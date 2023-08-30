import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpErrorResponse
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { AuthUtils } from '../Utils/auth.utils';
import { CacheConstants } from '../constant/cache.constant';

@Injectable()
export class AppInterceptor implements HttpInterceptor {

  constructor(private router: Router) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    // skip this for unauthed requests
    if (!request.url.includes('/authed')) {
      return next.handle(request);
    }

    // add auth token

    const authReq = request.clone({
      headers: request.headers.set('token', AuthUtils.getToken())
    });

    // Redirect to login if 401 error
    return next.handle(authReq  ).pipe(catchError(err => {
      if (err.status === 401) {
        AuthUtils.removeToken();
        this.router.navigate(['/log-in', 'true'])
      }
      return throwError(err);
    }));
  }
}
