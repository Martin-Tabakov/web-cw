import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { item } from 'src/app/data/models/item';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from '../../environments/environment';
import { item_return_dto } from '../data/dtos/item_return_dto';


@Injectable({
  providedIn: 'root'
})
export class InventoryService {

  baseUrl:string = environment.inventoryBackEndUrl;

  constructor(private httpClient:HttpClient) { }

  public getAll(): Observable<item_return_dto[]> {
    let url = `${environment.inventoryBackEndUrl}/all`

    return this.httpClient.get<item_return_dto[]>(url);
  }

  public getById(id: string) : Observable<item_return_dto> {
    let url = `${environment.inventoryBackEndUrl}?id=${id}`;

    return this.httpClient.get<item_return_dto>(url);
  }

  public update(item: any, id:string): Observable<item_return_dto> {
    let body = {
      "id": id,
      "name": item.name,
      "description": item.description,
      "purchasePrice": item.purchasePrice,
      "retailPrice": item.retailPrice,
      "quantity": item.quantity,
      "productCode": item.code,
      "category": item.category
    }

    let url = `${environment.inventoryBackEndUrl}`;
    
    console.log(body)

    return this.httpClient.patch<item_return_dto>(url, body, { });
  }

  public delete(id:string | undefined): Observable<boolean> {
    let url = `${environment.inventoryBackEndUrl}?id=${id}`;

    return this.httpClient.delete<boolean>(url);
  }
}
