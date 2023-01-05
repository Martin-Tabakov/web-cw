import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from '../../environments/environment';
import { item_return_dto } from '../data/dtos/item_return_dto';


@Injectable({
  providedIn: 'root'
})
export class InventoryService {

  baseUrl:string = environment.inventoryBackEndUrl;

  constructor(private httpClient:HttpClient) { }

  public getAll():Observable<item_return_dto[]> {
    let url = `${environment.inventoryBackEndUrl}/all`

    return this.httpClient.get<item_return_dto[]>(url);
  }
}
