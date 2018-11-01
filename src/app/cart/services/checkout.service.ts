// checkout.service.ts
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

// models/city.ts
export class City {
  id: number;
  name: string;
  stateId: number;
}


// models/state.ts
export class State {
  id: number;
  name: string;
}

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {

  constructor(private http: HttpClient) { }

  getStates(): Observable<State[]> {
     return this.http.get<State[]>(`${environment.apiEndPoint}/api/states`);
  }

  getCities(stateId: number): Observable<City[]> {
    return this.http.get<City[]>(`${environment.apiEndPoint}/api/cities?stateId=${stateId}`);
  }

}
