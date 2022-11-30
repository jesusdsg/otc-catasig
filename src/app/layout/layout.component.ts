import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { GlobalSearchService } from '../services/global-search.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent {
  breakpoint: number = 0;
  windowWidth: number = 0;
  items: MenuItem[]= [];

  constructor(private globalSearchService: GlobalSearchService){}

  ngOnInit() {
    this.checkSize();
  }

  checkSize() {
    this.breakpoint = window.innerWidth <= 600 ? 1 : 2;
    this.windowWidth = window.innerWidth;
  }

  handleSize() {
    this.checkSize();
  }

  text: string = '';

  results: string[] = [];

  search(event: any) {
    console.log('Searching ', event.target.value);
    this.globalSearchService.query.next(event.target.value);
  }
}
