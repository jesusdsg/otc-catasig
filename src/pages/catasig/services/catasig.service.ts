import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/development';

@Injectable({
  providedIn: 'root'
})
export class CatasigService {
  apiCatasig = environment.apiCatasig;
  constructor(private http: HttpClient) {
  }

  public getUrbanProperties() {
    return this.http.get(this.apiCatasig + '/property/urban', {});
  }

  public getRuralProperties(){
    return this.http.get(this.apiCatasig + '/property/rural', {});
  }

}
