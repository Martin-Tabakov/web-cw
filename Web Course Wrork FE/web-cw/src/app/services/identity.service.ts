import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { user_return_dto } from '../data/dtos/user_return_dto';
import { user } from '../data/models/user';

@Injectable({
  providedIn: 'root'
})
export class IdentityService {

  public loggedIn = new BehaviorSubject<boolean>(false);
  loggedIn$ = this.loggedIn.asObservable();

  constructor(
    private client: HttpClient
  ) {
   }

  logout(): void {
    this.clearCurrentUser();
    this.loggedIn.next(false);
  }

  login(user: any): Observable<user_return_dto> {
    let url = `${environment.mockServerIdentity}/login`;

    let mockData = {
      "username": user.username,
      "password": user.password 
    }

    return this.client.post<user_return_dto>(url, mockData);
  }

  setCurrentUser(user: user): void {
    localStorage.setItem('user',JSON.stringify(user));
  }

  clearCurrentUser(): void {
    localStorage.removeItem('user');
  }

  getCurrentUser(): user {
    let data = localStorage.getItem('user');

    return data? JSON.parse(data) : null;
  }

}
