import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Order} from "../models/order";
import {FilterRequest} from "../models/FilterRequest";

@Injectable({
  providedIn: 'root'
})

export class FilterService {
  constructor(private http : HttpClient) {
  }
  basicFilter(filter:FilterRequest):Observable<Order[]>{
    return this.http.post<Order[]>('https://localhost:7284/api/search/basic-sorting',filter);
  }
}
