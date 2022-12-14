import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminTeamsComponent } from './admin-teams/admin-teams.component';
import { AdminNewsComponent } from './admin-news/admin-news.component';
import { AdminMatchesComponent } from './admin-matches/admin-matches.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AdminMatchesFormComponent } from './admin-matches/admin-matches-form/admin-matches-form.component';
import { LayoutModule } from '../layout/layout.module';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { AdminTeamsFormComponent } from './admin-teams/admin-teams-form/admin-teams-form.component';


@NgModule({
  declarations: [
    AdminTeamsComponent,
    AdminNewsComponent,
    AdminMatchesComponent,
    AdminMatchesFormComponent,
    AdminLayoutComponent,
    AdminTeamsFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    LayoutModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: AdminLayoutComponent,
        children: [
          {
            path: 'match-admin',
            component: AdminMatchesComponent,
          },
          {
            path: 'match-admin-form/:id',
            component: AdminMatchesFormComponent,
          },
          {
            path: 'news-admin', component: AdminNewsComponent
          },
          {
            path: 'team-admin', component: AdminTeamsComponent
          },
          {
            path: 'team-admin-form/:id', component: AdminTeamsFormComponent
          },
        ]
      }

    ])
  ],
})
export class AdminModule { }
