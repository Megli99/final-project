import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsListComponent } from './news-list/news-list.component';
import { NewsCardComponent } from './news-card/news-card.component';
import { NewsInfoComponent } from './news-info/news-info.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { LayoutModule } from '../layout/layout.module';


@NgModule({
  declarations: [
    NewsListComponent,
    NewsCardComponent,
    NewsInfoComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    LayoutModule
  ],
  exports: [
    NewsListComponent,
    NewsCardComponent,
    NewsInfoComponent
  ]
})
export class NewsModule { }
