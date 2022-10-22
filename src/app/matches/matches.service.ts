import { Injectable } from '@angular/core';
import { Matches } from './matches-interface';
import { Observable, of } from 'rxjs';
import { SdaHttpClient } from '../data-layer/sda-be-mock.service';
import { FormGroup } from '@angular/forms';
@Injectable({
  providedIn: 'root',
})
export class MatchesService {
  constructor(private httpClient: SdaHttpClient) {}

  getMatches(): Observable<Matches[]> {
    return this.httpClient.getAll<Matches>('Matches');
  }
  getmatchbyid(id: number): Observable<Matches> {
    return this.httpClient.getById('Matches', id);
  }
  addMatches(matchData: Matches): Observable<Matches> {
    return this.httpClient.post<Matches>('Matches', matchData);
  }
  editMatches(matchData: Matches, id: number): Observable<Matches[]> {
    return this.httpClient.put<Matches>('Matches', id, matchData);
  }

  deleteMatches(id: number): Observable<boolean> {
    return this.httpClient.delete('Matches', id);
  }
}
