import { Component, OnInit } from '@angular/core';
import { Teams } from 'src/app/teams/teams-interface';
import { TeamsService } from 'src/app/teams/teams.service';
import { Matches } from '../matches-interface';
import { MatchesService } from '../matches.service';
@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.css']
})
export class MatchesComponent implements OnInit {
  matches: Matches[] = [];
  teams: Teams[] = []
  constructor(private matchesService: MatchesService, private teamsService: TeamsService) { }

  ngOnInit(): void {
    this.loadMatches();
    this.loadTeams()
  }

  private loadMatches(): void {
    this.matchesService.getMatches().subscribe((matches: Matches[]) => this.matches = matches)
  }

  private loadTeams(): void {
    this.teamsService.getTeams().subscribe((teams: Teams[]) => this.teams = teams)
  }
}
