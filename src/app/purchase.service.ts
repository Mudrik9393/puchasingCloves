import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PurchaseComponent } from './pages/purchase/purchase.component';

@Injectable({
  providedIn: 'root'
})
export class PurchaseService {
  baseURL: string  = "http://localhost:8095/api/purchases";

  constructor(private httpClient: HttpClient) { }
  
  getPurchasesList(): Observable<any> {
    return this.httpClient.get(this.baseURL+"/all");
  }

  createPurchase(purchase: any): Observable<Object> {
    return this.httpClient.post(`${this.baseURL}/save`, purchase);
  }

  getPurchaseById(id: number): Observable<PurchaseComponent> {
    return this.httpClient.get<PurchaseComponent>(`${this.baseURL}/${id}`);
  }

  updatePurchase(id: number, purchase: any): Observable<Object> {
    return this.httpClient.put(`${this.baseURL}/${id}`, purchase);
  }

  deletePurchase(id: number): Observable<Object> {
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}


