import { Component, OnInit } from '@angular/core';
import { News } from 'src/app/news/news-interface';
import { NewsService } from 'src/app/news/news.service';
@Component({
  selector: 'app-admin-news',
  templateUrl: './admin-news.component.html',
  styleUrls: ['./admin-news.component.css']
})
export class AdminNewsComponent implements OnInit {

  newsTableData: News[] = [];

  newsData: News = {
    id: 0,
    image: '',
    title: '',
    description: '',
    link: ''
  }

  constructor(private newsService: NewsService) {
    newsService.getNews().subscribe((results) => {
      this.newsTableData = results;
    });
  }

    ngOnInit(): void {
    }

  }
  
