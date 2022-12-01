import { Component } from '@angular/core';
import { GlobalSearchService } from 'src/app/services/global-search.service';
import { environment } from 'src/environments/development';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  text: string = '';
  page: string = '';
  results: string[] = [];

  constructor(private globalSearchService: GlobalSearchService) {
    this.globalSearchService.query.subscribe((string: string) => {
      this.text = string;
    });
    this.page = environment.siteURL;
  }

  openSearch(query: string, page: string) {
    const url = `https://www.google.com/search?q=${query}+site%3A${page}`;
    window.open(url, '_blank');
  }

  search(event: any) {
    this.openSearch(event.target.value, this.page);
  }
}
