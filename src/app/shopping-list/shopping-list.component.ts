import { Component, OnInit } from '@angular/core';
import { CatalogService } from '../services/catalog.service';

// store
import { Store } from '@ngrx/store';
import { reset, update } from '../book.action';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {
  public itemBook:any;
  public cartList:any = [];
  public itemBooks:any;
  public data:any = [];
  public totalPrice: any;

  constructor(private catalogService: CatalogService, private store: Store<any>) {
    const a = localStorage.getItem('itembooks')
    this.data = JSON.parse(a || '{}');
    console.log('local, store', this.data);
   }
public totalBook:any;
  ngOnInit(): void {
    this.itemBook = this.store.select('book').subscribe((data:any) => {
      this.cartList = data       
      console.log(this.cartList,'list book');  
    });
    this.totalPrice = this.getTotalPrice()
    console.log('tota', this.totalPrice);
    
  }
  getTotalPrice() {
    let total = 0;
     this.cartList.map((item:any) => {
      total += item.price ;
    });
    return total
  }

  removeBook(id:any){
    console.log('cart apa', this.cartList);
    this.cartList = this.cartList.filter((item:any) => item.id !== id);
    console.log('id', this.cartList, id);
  }

}
