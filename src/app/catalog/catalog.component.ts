import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { CatalogService } from '../services/catalog.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss'],
  providers: [NgbCarouselConfig]
})
export class CatalogComponent implements OnInit {
  // @Output() addBooks = new EventEmitter();

  public dataCatalog: any;
  public selectedBook:any;

  constructor(config: NgbCarouselConfig, private catalogService: CatalogService) {
    config.keyboard = true;
    config.pauseOnHover = true;
  }

  ngOnInit(): void {
    this.catalogService.getCatalogService()
    .subscribe(
      res => {
        this.dataCatalog = res;
        console.log('data', this.dataCatalog);
        // let sum = 0;
        // this.dataCatalog.forEach((item:any) => {
        //   sum += item.amount;
        //   console.log('item', item);
          
        // });
        // return sum;
          },
      err => console.log(err)
    );
  }

  addBook(books:any){
    // let book = {
    //   bookId: id, qty
    // }
    this.catalogService.addToCart(books);
    console.log('book', books);
    
  }

}
