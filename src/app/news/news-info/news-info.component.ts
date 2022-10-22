import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { News } from '../news-interface';
import { NewsService } from '../news.service';
@Component({
  selector: 'app-news-info',
  templateUrl: './news-info.component.html',
  styleUrls: ['./news-info.component.css']
})
export class NewsInfoComponent implements OnInit {
  newsById: News[] = [];
  news: News[] = [];
  id: number
  constructor(private newsService: NewsService, private activeRoute: ActivatedRoute) {
    this.id = +this.activeRoute.snapshot.params['id'] // + parses string to nr
  }

  ngOnInit(): void {
    this.getNewsDataById()
    this.getNewsData();
  }

  getNewsDataById() {
    this.newsService.getNewsById(this.id).subscribe((results) => {
      this.newsById.push(results);
    })
  }

  getNewsData() {
    this.newsService.getNews().subscribe((results) => {
      this.news = results;
    })
  }
}
