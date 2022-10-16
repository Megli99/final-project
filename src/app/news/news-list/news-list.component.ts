import { Component, OnInit } from '@angular/core';
import { News } from '../news-interface';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css']
})
export class NewsListComponent implements OnInit {
  news: News[] = [];

  constructor(private newsService: NewsService) { }

  ngOnInit(): void { }
  getNewsData() {
    this.newsService.getNews().subscribe((results) => {
      this.news = results;
    })
  }
}
