import { Component, OnInit } from '@angular/core';
import { Matches } from 'src/app/matches/matches-interface';
import { MatchesService } from 'src/app/matches/matches.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin-matches',
  templateUrl: './admin-matches.component.html',
  styleUrls: ['./admin-matches.component.css'],
})
export class AdminMatchesComponent implements OnInit {
  formGroup!: FormGroup;
  matchTableData: Matches[] = [];
  formData: any;

  constructor(private matchesService: MatchesService) {
    this.getMatchData();
    this.initForm();
  }

  initForm() {
    this.formGroup = new FormGroup({
      homeTeam: new FormControl(null, Validators.required),
      awayTeam: new FormControl(null, Validators.required),
      goalsHome: new FormControl(null, Validators.required),
      goalsAway: new FormControl(null, Validators.required),
      possessionHome: new FormControl(null, Validators.required),
      possessionAway: new FormControl(null, Validators.required),
    });
  }

  getMatchData() {
    this.matchesService.getMatches().subscribe((results) => {
      this.matchTableData = results;
    });
  }

  submitMatchData() {
    this.formGroup.markAllAsTouched();
    let formData = this.formGroup.value;
    this.matchesService.addMatches(formData).subscribe(() => {
      this.getMatchData();
    });
  }

  deleteMatchData(id: number) {
    if (id !== 0) {
      this.matchesService
        .deleteMatches(id)
        .subscribe(() => this.getMatchData());
    }
  }

  ngOnInit(): void {}
}
