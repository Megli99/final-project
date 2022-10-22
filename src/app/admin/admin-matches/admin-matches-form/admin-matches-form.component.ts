import { Component, OnInit } from '@angular/core';
import { Matches } from 'src/app/matches/matches-interface';
import { MatchesService } from 'src/app/matches/matches.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ActivatedRoute, RouterModule } from '@angular/router';
@Component({
  selector: 'app-admin-matches-form',
  templateUrl: './admin-matches-form.component.html',
  styleUrls: ['./admin-matches-form.component.css'],
})
export class AdminMatchesFormComponent implements OnInit {
  formGroup!: FormGroup;
  matchTableData: Matches[] = [];
  formData: any;
  id: number;

  constructor(
    private matchesService: MatchesService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {
    this.id = Number(this._route.snapshot.paramMap.get('id'));

    this.initForm();
    this.getMatchData();
  }

  initForm() {
    this.formGroup = new FormGroup({
      id: new FormControl({ value: null, disabled: true }),
      homeTeam: new FormControl(null, Validators.required),
      awayTeam: new FormControl(null, Validators.required),
      goalsHome: new FormControl(null, Validators.required),
      goalsAway: new FormControl(null, Validators.required),
      possessionHome: new FormControl(null, Validators.required),
      possessionAway: new FormControl(null, Validators.required),
    });

    if (this.id !== 0) {
      this.matchesService.getmatchbyid(this.id).subscribe((result) => {
        console.log(result);
        this.formGroup.setValue(result);
      });
    }
  }

  getMatchData() {
    this.matchesService.getMatches().subscribe((results) => {
      this.matchTableData = results;
    });
  }

  editMatches() {
    this.matchesService
      .editMatches(this.formData, this.id)
      .subscribe(() => this.editMatches());
  }

  submitMatchData() {
    debugger;
    if (this.id == 0) {
      this.formGroup.markAllAsTouched();
      let formData = this.formGroup.value;
      this.matchesService.addMatches(formData).subscribe(() => {
        this._router.navigate(['/match-admin'])
      });
    } else if (this.id !== 0) {

      this.formGroup.markAllAsTouched();
      let formData = this.formGroup.value;
      this.matchesService.editMatches(formData, this.id).subscribe(() => {
        this.getMatchData();
        this._router.navigate(['/match-admin'])
      });
    }
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
