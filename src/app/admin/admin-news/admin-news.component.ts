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
    image: '',
    title: '',
    description: '',
    link: ''
  }


  constructor(private newsService: NewsService) {
    this.getNewsData()
  }
  getNewsData() {
    this.newsService.getNews().subscribe((results) => {
      this.newsTableData = results;
    })
  }

  submitNewsData() {
    this.newsService.addNews(this.newsData).subscribe(() => {
      this.getNewsData()
    })
  }

  deleteNewsData(id: number) {
    if (id !== 0) {
      this.newsService.deleteNews(id).subscribe(() => this.getNewsData())
    }
  }

  ngOnInit(): void {
  }


}

