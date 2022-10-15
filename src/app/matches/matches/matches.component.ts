import { Component, OnInit } from '@angular/core';
import { Matches } from '../matches-interface';
import { MatchesService } from '../matches.service';
@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.css']
})
export class MatchesComponent implements OnInit {
  matches: Matches[] = [];

  constructor(private matchesService: MatchesService) { }

  ngOnInit(): void {
    this.loadMatches();
  }

  private loadMatches(): void {
    this.matchesService.getMatches().subscribe((matches: Matches[]) => this.matches = matches)
  }
}
