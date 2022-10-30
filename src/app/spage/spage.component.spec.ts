import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpageComponent } from './spage.component';

describe('SpageComponent', () => {
  let component: SpageComponent;
  let fixture: ComponentFixture<SpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
