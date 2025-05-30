// global-error.interceptor.ts
import { HttpRequest, HttpHandlerFn, HttpEvent, HttpInterceptorFn, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

export const globalErrorInterceptor: HttpInterceptorFn = (req: HttpRequest<any>, next: HttpHandlerFn): Observable<HttpEvent<any>> => {
     return next(req).pipe(
          catchError((error: HttpErrorResponse) => {
               if (error.status !== 200) {
                    alert(error.error?.error?.reason || 'An error occurred');
               }
               return throwError(() => error);
          })
     );
};

