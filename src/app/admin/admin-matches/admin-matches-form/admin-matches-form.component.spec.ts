import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminMatchesFormComponent } from './admin-matches-form.component';

describe('AdminMatchesFormComponent', () => {
  let component: AdminMatchesFormComponent;
  let fixture: ComponentFixture<AdminMatchesFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminMatchesFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminMatchesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
