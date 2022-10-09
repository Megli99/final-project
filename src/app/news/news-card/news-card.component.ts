import { Component, OnInit } from '@angular/core';
import { News } from '../news-interface';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-news-card',
  templateUrl: './news-card.component.html',
  styleUrls: ['./news-card.component.css']
})
export class NewsCardComponent implements OnInit {
  news: News[] = [];

  constructor(private newsService: NewsService) { }

  ngOnInit(): void {
    this.loadNews();
  }

  private loadNews(): void {
    this.newsService.getNews().subscribe((news: News[]) => this.news = news)
  }

}
