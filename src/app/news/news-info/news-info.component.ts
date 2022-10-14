import { Component, OnInit } from '@angular/core';
import { News } from '../news-interface';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-news-info',
  templateUrl: './news-info.component.html',
  styleUrls: ['./news-info.component.css']
})
export class NewsInfoComponent implements OnInit {
  news: News[] = [];

  constructor(private newsService: NewsService) { }

  ngOnInit(): void {
    this.loadNews();
  }

  private loadNews(): void {
    this.newsService.getNews().subscribe((news: News[]) => this.news = news)
  }

}
