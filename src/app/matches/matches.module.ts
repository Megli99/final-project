import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatchesComponent } from './matches/matches.component';
import { LayoutModule } from '../layout/layout.module';

@NgModule({
  declarations: [MatchesComponent],
  imports: [CommonModule, LayoutModule],
})
export class MatchesModule {}
