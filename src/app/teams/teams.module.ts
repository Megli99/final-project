import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamsComponent } from './teams/teams.component';
import { LayoutModule } from '../layout/layout.module';



@NgModule({
  declarations: [
    TeamsComponent
  ],
  imports: [
    CommonModule,
    LayoutModule
  ]
})
export class TeamsModule { }
