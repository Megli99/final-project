import { TestBed } from '@angular/core/testing';

import { AdminTeamsService } from './admin-teams.service';

describe('AdminTeamsService', () => {
  let service: AdminTeamsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminTeamsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
