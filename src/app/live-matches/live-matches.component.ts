import { Component, OnInit } from '@angular/core';
import { Teams } from '../teams/teams-interface';
import { TeamsService } from '../teams/teams.service';

@Component({
  selector: 'app-live-matches',
  templateUrl: './live-matches.component.html',
  styleUrls: ['./live-matches.component.css']
})
export class LiveMatchesComponent implements OnInit {

  teams: Teams[] = []

  constructor(private teamsService: TeamsService) { }

  ngOnInit(): void {
    this.loadTeams()
  }

  private loadTeams(): void {
    this.teamsService.getTeams().subscribe((teams: Teams[]) => this.teams = teams)
  }

  get firstFiveTeams() {
    return this.teams.slice(this.teams.length - 5, this.teams.length)
  }

}
