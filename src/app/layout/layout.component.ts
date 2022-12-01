import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { GlobalSearchService } from '../services/global-search.service';
import { Router } from '@angular/router';
import { environment } from 'src/environments/development';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent {
  breakpoint: number = 0;
  windowWidth: number = 0;
  items: MenuItem[] = [];

  constructor(
    private globalSearchService: GlobalSearchService,
    private router: Router
  ) {}

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

  openSearch(query: string, page: string) {
    const url = `https://www.google.com/search?q=${query}+site%3A${page}`;
    window.open(url, '_blank');
  }

  search(event: any) {
    /* Submit the query value in the Global Search service variable called query */
    this.globalSearchService.query.next(event.target.value);
    this.text = '';
    /* Redirect to the search component */
    this.router.navigate(['/search']);
    this.openSearch(event.target.value, environment.siteURL)
  }
}
