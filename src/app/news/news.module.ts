import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsListComponent } from './news-list/news-list.component';
import { NewsCardComponent } from './news-card/news-card.component';
import { NewsInfoComponent } from './news-info/news-info.component';



@NgModule({
  declarations: [
    NewsListComponent,
    NewsCardComponent,
    NewsInfoComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NewsListComponent,
    NewsCardComponent,
    NewsInfoComponent
  ]
})
export class NewsModule { }
