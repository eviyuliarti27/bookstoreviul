import { Component, OnInit, Input } from '@angular/core';
import { CatalogService } from '../services/catalog.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() book:any;

  constructor(private catalogService: CatalogService) { 
    this.book = this.catalogService.getItems();
    console.log('book', this.book);
    
  }

  ngOnInit(): void {
  }

}
