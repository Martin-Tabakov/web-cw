import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class IdentityService {

  public loggedIn = new BehaviorSubject<boolean>(false);
  loggedIn$ = this.loggedIn.asObservable();

  constructor() {
   }

  logout(): void {
    this.loggedIn.next(false);
  }

  login(): Observable<boolean> {
    return of(false);
  }
}
