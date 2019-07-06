import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoundStartComponent } from './round-start.component';

describe('RoundStartComponent', () => {
  let component: RoundStartComponent;
  let fixture: ComponentFixture<RoundStartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoundStartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoundStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
