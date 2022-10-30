import { Component, OnInit } from '@angular/core';
import { Matches } from '../matches/matches-interface';
import { MatchesService } from '../matches/matches.service';

@Component({
  selector: 'app-background',
  templateUrl: './background.component.html',
  styleUrls: ['./background.component.css']
})
export class BackgroundComponent implements OnInit {

  matches: Matches[] = [];

  constructor(private matchesService: MatchesService) { }

  ngOnInit(): void {
    this.loadMatches()
  }

  private loadMatches(): void {
    this.matchesService.getMatches().subscribe((matches: Matches[]) => this.matches = matches)
  }

}
