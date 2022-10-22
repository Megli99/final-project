import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AdminModule } from './admin/admin.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SdaHttpClientModule } from './data-layer/sda-be-mock.module';
import { SdaHttpClient } from './data-layer/sda-be-mock.service';
import { MatchesModule } from './matches/matches.module';
import { NewsModule } from './news/news.module';
import { TeamsModule } from './teams/teams.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NewsModule,
    TeamsModule,
    MatchesModule,
    SdaHttpClientModule,
  ],
  providers: [SdaHttpClient],
  bootstrap: [AppComponent],
})
export class AppModule { }
