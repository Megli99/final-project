import { Component, OnInit } from '@angular/core';
import { Matches } from 'src/app/matches/matches-interface';
import { MatchesService } from 'src/app/matches/matches.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Route } from '@angular/router';
import { RouterModule } from '@angular/router';
import { dbConfig } from 'src/app/data-layer/db.config';
import { NgConfirmService } from 'ng-confirm-box';


@Component({
  selector: 'app-admin-matches',
  templateUrl: './admin-matches.component.html',
  styleUrls: ['./admin-matches.component.css'],
})
export class AdminMatchesComponent implements OnInit {

  matchTableData: Matches[] = [];



  constructor(private matchesService: MatchesService,
    private confirmService: NgConfirmService,
    private _route: ActivatedRoute,
    private _router: Router) {
    this.getMatchData();


  }

  createMatch() {
    this._router.navigate(['/admin/match-admin-form/0']);
  }

  getMatchData() {
    this.matchesService.getMatches().subscribe((results) => {
      this.matchTableData = results;
    });
  }


  deleteMatchData(id: number) {
    this.confirmService.showConfirm("Are you sure you want to delete?",
      () => {
        this.matchesService
        .deleteMatches(id)
        .subscribe(() => this.getMatchData());
      },
      () => {})
  }

  editMatches(id: Number) {
    this._router.navigate([`/admin/match-admin-form/${id}`]);

  }


  ngOnInit(): void { }
}
