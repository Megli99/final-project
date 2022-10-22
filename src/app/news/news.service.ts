import { Injectable } from '@angular/core';
import { News } from './news-interface';
import { NEWS } from './news-data';
import { Observable, of } from 'rxjs';
import { SdaHttpClient } from '../data-layer/sda-be-mock.service';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private httpClient: SdaHttpClient) { }

  getNewsById(id: number): Observable<News> {
    return this.httpClient.getById<News>('News', id);
  }

  getNews(): Observable<News[]> {
    return this.httpClient.getAll<News>('News');
  }

  addNews(newsData: News): Observable<News> {
    return this.httpClient.post<News>('News', newsData);
  }

  deleteNews(id: number): Observable<boolean> {
    return this.httpClient.delete('News', id);
  }
}
