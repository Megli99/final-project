import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientComponent } from './client.component';
import { LiveMatchesComponent } from '../live-matches/live-matches.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { BackgroundComponent } from '../background/background.component';
import { RouterModule } from '@angular/router';
import { LayoutModule } from '../layout/layout.module';



@NgModule({
  declarations: [
    ClientComponent,
    LiveMatchesComponent,
    SidebarComponent,
    BackgroundComponent
  ],
  imports: [
    CommonModule,
    LayoutModule,
    RouterModule.forChild([{
      path: "",
      component: ClientComponent
    }])
  ]
})
export class ClientModule { }
