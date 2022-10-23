import { Component, OnInit } from '@angular/core';
import { Teams } from 'src/app/teams/teams-interface';
import { TeamsComponent } from 'src/app/teams/teams/teams.component';
import { TeamsService } from 'src/app/teams/teams.service';
import { Route, ActivatedRoute, Router} from '@angular/router';



@Component({
  selector: 'app-admin-teams',
  templateUrl: './admin-teams.component.html',
  styleUrls: ['./admin-teams.component.css']
})
export class AdminTeamsComponent implements OnInit {

  teamTableData: Teams[] = [];

  constructor(private teamsService: TeamsService,
    private _route: ActivatedRoute,
    private _router: Router) 
    { 
      this.getTeamData()
    }
    
  createTeam() {
    this._router.navigate(['/admin/team-admin-form/0']);
  }

  getTeamData() {
    this.teamsService.getTeams().subscribe((results) => {
      this.teamTableData = results;
    });
  }


  deleteTeamData(id: number) {
    if (id !== 0) {
      this.teamsService
        .deleteTeams(id)
        .subscribe(() => this.getTeamData());
    }
  }
  editTeam(id: Number) {
    this._router.navigate([`/admin/team-admin-form/${id}`]);

  }


  ngOnInit(): void {
  }

}
