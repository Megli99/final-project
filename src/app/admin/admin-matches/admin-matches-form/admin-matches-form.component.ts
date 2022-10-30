import { Component, OnInit } from '@angular/core';
import { Matches } from 'src/app/matches/matches-interface';
import { MatchesService } from 'src/app/matches/matches.service';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Teams } from 'src/app/teams/teams-interface';
import { TeamsService } from 'src/app/teams/teams.service';
@Component({
  selector: 'app-admin-matches-form',
  templateUrl: './admin-matches-form.component.html',
  styleUrls: ['./admin-matches-form.component.css'],
})
export class AdminMatchesFormComponent implements OnInit {
  formGroup!: FormGroup;
  formData: any;
  id: number;
  teamTableData: Teams[] = [];

  constructor(
    private teamsService: TeamsService,
    private matchesService: MatchesService,
    private _route: ActivatedRoute,
    private _router: Router,
    private fb: FormBuilder
  ) {
    this.id = +this._route.snapshot.params['id'];
    this.initForm();
    if (this.id != 0) {
      this.getMatchData();
    }
    this.getTeamData();
  }

  ngOnInit(): void { }

  initForm() {
    this.formGroup = this.fb.group(
      {
        id: new FormControl(
          { value: null, disabled: true },
          Validators.required
        ),
        homeTeam: new FormControl(null, Validators.required),
        awayTeam: new FormControl(null, Validators.required),
        goalsHome: new FormControl(null, Validators.required),
        goalsAway: new FormControl(null, Validators.required),
        possessionHome: new FormControl(null, Validators.required),
        possessionAway: new FormControl(null, Validators.required),
        matchTime: new FormControl(null, Validators.required)
      },
      { validator: this.possessionConfirming }
    );
  }

  possessionConfirming(c: AbstractControl) {
    const possessionHomeControl = c.get('possessionHome');
    const possessionAway = c.get('possessionAway');
    if (
      possessionHomeControl &&
      possessionAway &&
      possessionHomeControl.value + possessionAway.value !== 100
    ) {
      return { possessionInvalid: true };
    }
    return;
  }

  getTeamData() {
    this.teamsService.getTeams().subscribe((results) => {
      this.teamTableData = results;
    });
  }

  getMatchData() {
    this.matchesService.getmatchbyid(this.id).subscribe((response) => {
      this.formGroup.setValue(response)
    });
  }

  editMatches() {
    this.matchesService.editMatches(this.formData, this.id)
      .subscribe(() => {
        this._router.navigate(['/admin/match-admin'])
      });
  }

  submitMatchData() {
    debugger
    this.formGroup.markAllAsTouched();
    if (this.formGroup.valid) {
      if (this.id == 0) {
        let formData = this.formGroup.value;
        this.matchesService.addMatches(formData).subscribe(() => {
          this._router.navigate(['/admin/match-admin']);
        });
      } else if (this.id !== 0) {
        let formData = this.formGroup.value;
        this.matchesService.editMatches(formData, this.id).subscribe(() => {
          this.getMatchData();
          this._router.navigate(['/admin/match-admin']);
        });
      }
    }

  }


}
