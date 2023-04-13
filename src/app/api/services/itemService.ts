import {Injectable} from "@angular/core";
import {Item} from "../models/item";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})

export class ItemService{
  constructor(private http : HttpClient) {
  }
  saveItems(items: Item[], orderId:number){
    let data = {
      item: items,
      orderId:orderId
    }
    return this.http.post<string>('https://localhost:7284/api/item/save-items',data);
  }
  deleteItems(id:number){
    return this.http.delete<any>(`https://localhost:7284/api/item/save-items/${id}`);
  }
  getOrderItems(id:number) : Observable<Item[]>{
    return this.http.get<Item[]>(`https://localhost:7284/api/item/get-concrete-order-items/${id}`);
  }
}
