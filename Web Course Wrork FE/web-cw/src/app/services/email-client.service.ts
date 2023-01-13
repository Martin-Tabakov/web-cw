import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmailClientService {

  constructor(
    private client:HttpClient
  ) { }

  sendResetPasswordMail(userData:any): void {
    let data = {
      "Id":userData.id,
      "Email":"azsammartin@gmail.com"
    }
    let url = `${environment.emailClientAPI}`;

    this.client.post(url,data).subscribe();
  }
}
