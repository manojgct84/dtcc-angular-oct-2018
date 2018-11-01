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

    constructor() { }

    login(username: string, password: string) {
      this.authenticated = true;
      this.authenticated$.next(this.authenticated);
    }

    logout() {
      this.authenticated = false;
      this.authenticated$.next(this.authenticated);
    }
  }
