import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamsCardComponent } from './teams-card/teams-card.component';
import { ListComponent } from './list/list.component';
import { InfoComponent } from './info/info.component';



@NgModule({
  declarations: [
    TeamsCardComponent,
    ListComponent,
    InfoComponent
  ],
  imports: [
    CommonModule
  ], exports: [
    TeamsCardComponent
  ]
})
export class TeamsModule { }
