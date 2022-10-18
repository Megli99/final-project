import { Component, OnInit } from '@angular/core';
import { News } from 'src/app/news/news-interface';
import { NewsService } from 'src/app/news/news.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin-news',
  templateUrl: './admin-news.component.html',
  styleUrls: ['./admin-news.component.css']
})
export class AdminNewsComponent implements OnInit {
  formGroup!: FormGroup;
  newsTableData: News[] = [];
  formData: any;

  // newsData: News = {
  //   image: '',
  //   title: '',
  //   description: '',
  //   link: ''
  // }


  constructor(private newsService: NewsService) {
    this.getNewsData();
    this.initForm();
  }

  initForm() {
    this.formGroup = new FormGroup({
      image: new FormControl(null, Validators.required),
      title: new FormControl(null, Validators.required),
      description: new FormControl(null, Validators.required),
      link: new FormControl(null, Validators.required)
    });
  }

  getNewsData() {
    this.newsService.getNews().subscribe((results) => {
      this.newsTableData = results;
    })
  }

  submitNewsData() {
    this.formGroup.markAllAsTouched();
    let formData = this.formGroup.value
    this.newsService.addNews(formData).subscribe(() => {
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

