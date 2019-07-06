import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoundsScoreComponent } from './rounds-score.component';

describe('RoundsScoreComponent', () => {
  let component: RoundsScoreComponent;
  let fixture: ComponentFixture<RoundsScoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoundsScoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoundsScoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
