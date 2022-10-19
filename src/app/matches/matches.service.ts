import { Injectable } from '@angular/core';
import { Matches } from './matches-interface';
import { Observable, of } from 'rxjs';
import { SdaHttpClient } from '../data-layer/sda-be-mock.service';
@Injectable({
  providedIn: 'root'
})
export class MatchesService {
  constructor(private httpClient: SdaHttpClient) { }
   
  getMatches(): Observable<Matches[]> {
    return this.httpClient.getAll<Matches>('Matches')
  }
  addMatches(matchData: Matches): Observable<Matches> {
    return this.httpClient.post<Matches>('Matches', matchData);
  }

  deleteMatches(id: number): Observable<boolean> {
    return this.httpClient.delete('Matches', id);
  }
}
