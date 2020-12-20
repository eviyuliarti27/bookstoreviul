import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { Store } from '@ngrx/store';
import { reset, update } from '../book.action';


@Injectable({
  providedIn: 'root'
})
export class CatalogService {
  public items:any= [];
  public products = new Subject(); 
  constructor(
    private http: HttpClient,
    private store: Store<any>) { }

  setDefault() {
    this.store.dispatch(reset());
  }

  getCatalogService() {
    const url = '../assets/data/data.json';
    return this.http.get(url);
  }

  addToCart(product:any) {
    this.items.push(product);
    this.products.next(this.items);
  }

  getItems(): Observable<any>  {
    console.log('this.Items :', this.items);
    // let apa = this.store.dispatch(update(this.items));
    // console.log('apa', apa);  
    return this.products.asObservable();;
  }
}
