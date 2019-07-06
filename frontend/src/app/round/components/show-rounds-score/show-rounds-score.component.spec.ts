import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowRoundsScoreComponent } from './show-rounds-score.component';

describe('ShowRoundsScoreComponent', () => {
  let component: ShowRoundsScoreComponent;
  let fixture: ComponentFixture<ShowRoundsScoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowRoundsScoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowRoundsScoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
