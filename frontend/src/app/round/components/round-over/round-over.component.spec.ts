import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoundOverComponent } from './round-over.component';

describe('RoundOverComponent', () => {
  let component: RoundOverComponent;
  let fixture: ComponentFixture<RoundOverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoundOverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoundOverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
