import { Component, OnInit } from '@angular/core';
import { News } from '../news-interface';
import { NewsService } from '../news.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-news-card',
  templateUrl: './news-card.component.html',
  styleUrls: ['./news-card.component.css']
})
export class NewsCardComponent implements OnInit {
  news: News[] = [];

  ViewNewsDetail(news_id: any) {
    let url: string = "/news-list/news-info/" + news_id
    this.router.navigateByUrl(url);
  }

  constructor(private newsService: NewsService, private router: Router) { }

  ngOnInit(): void {
    this.loadNews();
  }

  private loadNews(): void {
    this.newsService.getNews().subscribe((news: News[]) => this.news = news)
  }

}
