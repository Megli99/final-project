import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminTeamsComponent } from './admin-teams/admin-teams.component';
import { AdminNewsComponent } from './admin-news/admin-news.component';
import { AdminMatchesComponent } from './admin-matches/admin-matches.component';



@NgModule({
  declarations: [
    AdminTeamsComponent,
    AdminNewsComponent,
    AdminMatchesComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AdminModule { }
