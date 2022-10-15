import { Injectable } from '@angular/core';
import { News } from './news-interface';
import { NEWS } from './news-data';
import { Observable, of } from 'rxjs';
import { SdaHttpClient } from '../data-layer/sda-be-mock.service';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private httpClient:SdaHttpClient) { }

  getNews(): Observable<News[]> {
    return this.httpClient.getAll<News>('News')
  }
}
