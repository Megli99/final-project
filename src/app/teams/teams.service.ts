import { Injectable } from '@angular/core';
import { SdaHttpClient } from '../data-layer/sda-be-mock.service';
import { Teams } from './teams-interface';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TeamsService {

  constructor(private httpClient: SdaHttpClient) { }

  getTeams(): Observable<Teams[]> {
    return this.httpClient.getAll<Teams>('Teams')
  }
  getTeamsbyid(id: number): Observable<Teams> {
    return this.httpClient.getById('Teams', id);
  }
  
  addTeams(teamData: Teams): Observable<Teams> {
    return this.httpClient.post<Teams>('Teams', teamData);
  }
  editTeams(teamData: Teams, id: number): Observable<Teams[]> {
    return this.httpClient.put<Teams>('Teams', id, teamData);
  }

  deleteTeams(id: number): Observable<boolean> {
    return this.httpClient.delete('Teams', id);
  }
}
