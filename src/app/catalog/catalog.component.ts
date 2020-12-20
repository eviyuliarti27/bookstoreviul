import { Component, OnInit, Input, Output } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { CatalogService } from '../services/catalog.service';

// store
import { Store } from '@ngrx/store';
import { reset } from '../book.action';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss'],
  providers: [NgbCarouselConfig]
})
export class CatalogComponent implements OnInit {
  public items: any= [];
  public dataCatalog: any = [];
  public selectedBook:any = false;
  public book:number = 0;
  public itemBook:any;

  constructor(config: NgbCarouselConfig, private catalogService: CatalogService, private store: Store<any>) {
    config.keyboard = true;
    config.pauseOnHover = true;
  }

  ngOnInit(): void {
    this.getBookList();
  }

  getBookList(){
    this.selectedBook = new Array(this.dataCatalog.length);
    this.catalogService.getCatalogService()
    .subscribe(
      res => {
        this.dataCatalog = res;
        console.log('data', this.dataCatalog);
      },
      err => console.log(err)
    );
   
  }

  addBook(books:any, bookId:any){
    this.catalogService.addToCart(books);
    this.items.push(books);
    this.items.map((item:any, index:any) => {
      if (item.id === bookId) {
        this.selectedBook[bookId] = true;
        console.log('item', item.id, bookId);
      }
    })    
  }

}
