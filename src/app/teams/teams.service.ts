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
}
