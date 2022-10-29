import { Component, OnInit } from '@angular/core';
import { Teams } from 'src/app/teams/teams-interface';
import { TeamsService } from 'src/app/teams/teams.service';
import { Route } from '@angular/router';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { FormGroup,FormControl ,Validators } from '@angular/forms';

@Component({
  selector: 'app-admin-teams-form',
  templateUrl: './admin-teams-form.component.html',
  styleUrls: ['./admin-teams-form.component.css']
})
export class AdminTeamsFormComponent implements OnInit {
  formGroup!: FormGroup;
  teamTableData: Teams[] = [];
  formData: any;
  id: number;

  constructor(
    private teamsService: TeamsService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { 
    this.id = +this._route.snapshot.params['id'];
    this.initForm();
    this.getTeamData();
  }
  initForm() {
    this.formGroup = new FormGroup({
      id: new FormControl({ value: null, disabled: true }, Validators.required),
      name: new FormControl(null, Validators.required),
      category: new FormControl(null, Validators.required),
      avgPointsMatch: new FormControl(null, Validators.required),
      loses: new FormControl(null, Validators.required),
      wins: new FormControl(null, Validators.required),
      draws: new FormControl(null, Validators.required),
      teamLogo: new FormControl(null, Validators.required)
    });

    if (this.id !== 0) {
      this.teamsService.getTeamsbyid(this.id).subscribe((result) => {
        this.formGroup.setValue(result);
      });
    }
  }

  getTeamData() {
    this.teamsService.getTeams().subscribe((results) => {
      this.teamTableData = results;
    });
  }

  editTeams() {
    this.teamsService
      .editTeams(this.formData, this.id)
      .subscribe(() => this.editTeams());
  }

  submitTeamData() {
    this.formGroup.markAllAsTouched();
    if (this.formGroup.valid) {
      if (this.id == 0) {
        let formData = this.formGroup.value;
        this.teamsService.addTeams(formData).subscribe(() => {
          this._router.navigate(['/admin/team-admin']);
        });
      } else if (this.id !== 0) {
        let formData = this.formGroup.value;
        this.teamsService.editTeams(formData, this.id).subscribe(() => {
          this.getTeamData();
          this._router.navigate(['/admin/team-admin']);
          this.formGroup.reset();
        });
      }
    }
  }

  deleteTeamsData(id: number) {
    if (id !== 0) {
      this.teamsService
        .deleteTeams(id)
        .subscribe(() => this.getTeamData());
    }}
  ngOnInit(): void {
  }

}
