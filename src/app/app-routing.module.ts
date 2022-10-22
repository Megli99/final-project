import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminNewsComponent } from './admin/admin-news/admin-news.component';
import { NewsInfoComponent } from './news/news-info/news-info.component';
import { NewsListComponent } from './news/news-list/news-list.component';


const routes: Routes = [
  {
    path: 'news-list', component: NewsListComponent
  },
  {
    path: 'news-list/news-info/:id', component: NewsInfoComponent,
  },
  { 
    path: 'news-admin', component: AdminNewsComponent 
  },
  {
    path: 'home', loadChildren: () => import('./client/client.module').then((module) => module.ClientModule)
  },
  { 
    path: '**', component: NewsListComponent 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
