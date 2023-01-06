import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { of } from 'rxjs/internal/observable/of';

@Injectable({
  providedIn: 'root'
})
export class IdentityService {

  constructor() { }

  logout(): Observable<void> {
    return of();
  }
}
