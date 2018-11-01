// header.component.ts
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  // amount
  authenticated$: Observable<boolean>;
  
  constructor(private authService: AuthService) {
    this.authenticated$ = this.authService.authenticated$;
   }

   logout() {
     this.authService.logout();
   }

  ngOnInit() {
  }

}
