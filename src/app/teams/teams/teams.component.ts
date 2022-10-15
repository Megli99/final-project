import { Component, OnInit } from '@angular/core';
import { Teams } from '../teams-interface';
import { TeamsService } from '../teams.service';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {
  teams: Teams[] = [];

  constructor(private teamsService: TeamsService) { }

  ngOnInit(): void {
    this.loadTeams();
  }

  private loadTeams(): void {
    this.teamsService.getTeams().subscribe((teams: Teams[]) => this.teams = teams)
  }
}