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
  order: any;

  constructor(private teamsService: TeamsService) { }

  ngOnInit(): void {
    this.loadTeams();
  }

  sortData() {
    if (this.order) {
      let newarr = this.teams.sort((a, b) => a.avgPointsMatch - b.avgPointsMatch);
      this.teams = newarr;
    } else {
      let newarr = this.teams.sort((a, b) => b.avgPointsMatch - a.avgPointsMatch);
      this.teams = newarr;
    }
    this.order = !this.order;
  }

  private loadTeams(): void {
    this.teamsService.getTeams().subscribe((teams: Teams[]) => this.teams = teams)
  }
}