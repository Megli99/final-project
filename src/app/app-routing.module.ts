import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminMatchesFormComponent } from './admin/admin-matches/admin-matches-form/admin-matches-form.component';
import { AdminMatchesComponent } from './admin/admin-matches/admin-matches.component';
import { AdminNewsComponent } from './admin/admin-news/admin-news.component';
import { MatchesComponent } from './matches/matches/matches.component';
import { NewsInfoComponent } from './news/news-info/news-info.component';
import { NewsListComponent } from './news/news-list/news-list.component';

const routes: Routes = [
  {
    path: 'news-list',
    component: NewsListComponent,
  },
  {
    path: 'news-list/news-info/:id',
    component: NewsInfoComponent,
  },
  {
    path: 'news-info',
    component: NewsInfoComponent,
  },
  {
    path: 'news-admin',
    component: AdminNewsComponent,
  },

  {
    path: 'match-admin',
    component: AdminMatchesComponent,
  },
  {
    path: 'match-admin-form/:id',
    component: AdminMatchesFormComponent,
  },
  {
    path: '**',
    component: NewsListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
