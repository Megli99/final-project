import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminTeamsComponent } from './admin-teams/admin-teams.component';
import { AdminNewsComponent } from './admin-news/admin-news.component';
import { AdminMatchesComponent } from './admin-matches/admin-matches.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AdminTeamsComponent,
    AdminNewsComponent,
    AdminMatchesComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class AdminModule { }
