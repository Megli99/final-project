import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewsInfoComponent } from './news/news-info/news-info.component';
import { NewsListComponent } from './news/news-list/news-list.component';


const routes: Routes = [
  {
    path: '', pathMatch: 'full', redirectTo: 'home'
  },
  {
    path: 'news-list',
    component: NewsListComponent,
  },
  {
    path: 'news-list/news-info/:id',
    component: NewsInfoComponent,
  },
  {
    path: 'home', loadChildren: () => import('./client/client.module').then((module) => module.ClientModule)
  },
  {
    path: 'admin', loadChildren: () => import('./admin/admin.module').then((module) => module.AdminModule)
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
