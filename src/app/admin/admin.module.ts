import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminTeamsComponent } from './admin-teams/admin-teams.component';
import { AdminNewsComponent } from './admin-news/admin-news.component';
import { AdminMatchesComponent } from './admin-matches/admin-matches.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminMatchesFormComponent } from './admin-matches/admin-matches-form/admin-matches-form.component';


@NgModule({
  declarations: [
    AdminTeamsComponent,
    AdminNewsComponent,
    AdminMatchesComponent,
    AdminMatchesFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
