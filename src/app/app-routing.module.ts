import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewsInfoComponent } from './news/news-info/news-info.component';
// import { NewsCardComponent } from './news/news-card/news-card.component'; 
import { NewsListComponent } from './news/news-list/news-list.component';

const routes: Routes = [
  {
    path: 'news-list', component: NewsListComponent
  },
  {
    path: 'news-list/:id', component: NewsInfoComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
