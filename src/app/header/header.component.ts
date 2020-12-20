import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { reset, update } from '../book.action';
import { CatalogService } from '../services/catalog.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public book:any;

  constructor(
    private catalogService: CatalogService, 
    private store: Store<any>,
    private router : Router) { 
      const routerActive = this.router.url
      console.log('router', routerActive);
      if(routerActive == '/home' || routerActive == '/catalog') {
        this.catalogService.setDefault()
      }
  }

  ngOnInit(): void {
    this.catalogService.getItems().subscribe((data:any) => {
      this.book = data.length;
      const databook = data
      console.log('book list', databook);
      localStorage.setItem('itembooks', JSON.stringify(databook));
    });
    
   
  
  }


}
