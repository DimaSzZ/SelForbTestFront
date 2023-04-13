import { Injectable } from '@angular/core';
import {Provider} from "../models/provider";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})

export class ProviderService{
  constructor(private http : HttpClient) { }

  createProvider(nameProvider:string){
    return this.http.post<any>('https://localhost:7284/api/provider/create-provider',nameProvider);
  }
  getAllProviders() : Observable<Provider[]>{
    return this.http.get<Provider[]>('https://localhost:7284/api/provider/get-all-provider');
  }
}
