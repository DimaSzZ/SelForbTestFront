import {Injectable} from "@angular/core";
import {Order} from "../models/order";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})

export class OrderService{
  constructor(private http : HttpClient) {
  }
  saveOrder(order:Order){
    return this.http.post<any>('https://localhost:7284/api/order/save-order',order);
  }
  deleteOrder(id:number){
    return this.http.delete<any>(`https://localhost:7284/api/order/delete-order/${id}`);
  }
  getOneOrder(id:number) : Observable<Order>{
    return this.http.get<Order>(`https://localhost:7284/api/order/get-one-order/${id}`);
  }
  getAllOrder() : Observable<Order[]>{
    return this.http.get<Order[]>(`https://localhost:7284/api/order/get-all-order`);
  }
}
