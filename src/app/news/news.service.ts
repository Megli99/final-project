import { Injectable } from '@angular/core';
import { News } from './news-interface';
import { NEWS } from './news-data';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  getNews(): Observable<News[]> {
    return of(NEWS);
  }
  constructor() { }
}
