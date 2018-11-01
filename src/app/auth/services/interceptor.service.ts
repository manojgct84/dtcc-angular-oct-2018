// interceptor.service.ts
import { AuthService } from 'src/app/auth/services/auth.service';
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

  constructor(private authService: AuthService) {

   }

   intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
     
     
    //TODO: Inject token
    console.log('interceptor ', request.method, request.url);
 
    if (this.authService.authenticated) {
      request = request.clone({
        setHeaders: {
          Authorization: `JWT ${this.authService.token}`
        }
      });
    }
    
    return next.handle(request);
  }

}
