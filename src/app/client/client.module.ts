import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientComponent } from './client.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { LiveMatchesComponent } from '../live-matches/live-matches.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { FooterComponent } from '../footer/footer.component';
import { BackgroundComponent } from '../background/background.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ClientComponent,
    NavbarComponent,
    LiveMatchesComponent,
    SidebarComponent,
    FooterComponent,
    BackgroundComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{
      path: "",
      component: ClientComponent
    }])
  ]
})
export class ClientModule { }
