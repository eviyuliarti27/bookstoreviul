import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CatalogService {
  items:any= [];
  constructor(private http: HttpClient) { }

  getCatalogService() {
    const url = '../assets/data/data.json';
    return this.http.get(url);
  }

  addToCart(product:any) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }
}
