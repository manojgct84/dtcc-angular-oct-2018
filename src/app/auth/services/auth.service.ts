import { Router } from '@angular/router';
import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
  // auth.service.ts
  import { Injectable } from '@angular/core';
  import { BehaviorSubject } from 'rxjs';

  @Injectable({
    providedIn: 'root'
  })
  export class AuthService {
    authenticated = false;

    authenticated$: BehaviorSubject<boolean> = 
            new BehaviorSubject(this.authenticated);

    nextUrl: string;

    constructor(private http: HttpClient,
                private router: Router) { 

        if (this.token) {
          this.authenticated = true;
          this.authenticated$.next(this.authenticated);
        }

    }



    get token() {
      return localStorage.getItem('token');
    }

    login(username: string, password: string) {
      const data = {
        username, // username:username es6
        password
      };

      this.http.post(`${environment.authEndPoint}`, data)
               .subscribe ( (result: any) => {
                 console.log('result ', result);
                 localStorage.setItem('token', result.token);
                 this.authenticated = true;
                 this.authenticated$.next(this.authenticated);

                 this.router.navigateByUrl(this.nextUrl || '/');
               });
    }

    logout() {
      this.authenticated = false;
      this.authenticated$.next(this.authenticated);
      localStorage.clear();
      this.router.navigateByUrl('/');
    }
  }
