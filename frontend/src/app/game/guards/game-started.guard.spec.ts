import { TestBed, async, inject } from '@angular/core/testing';

import { GameStartedGuard } from './game-started.guard';

describe('GameStartedGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GameStartedGuard]
    });
  });

  it('should ...', inject([GameStartedGuard], (guard: GameStartedGuard) => {
    expect(guard).toBeTruthy();
  }));
});
