import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { CsrfService } from './csrf.service';

@Injectable({
  providedIn: 'root'
})
export class CsrfInterceptor implements HttpInterceptor {
  constructor(private csrfService: CsrfService) { }
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const updatedRequest = request.clone({
      setHeaders: {
        'csrf-token': this.csrfService.getCsrfToken()
      }
    });
    return next.handle(updatedRequest);
  }
}
