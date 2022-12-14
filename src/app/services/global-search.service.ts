import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalSearchService {
    public query: BehaviorSubject<string> = new BehaviorSubject<string>('');
}
