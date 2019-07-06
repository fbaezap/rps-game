import { TestBed, async, inject } from '@angular/core/testing';

import { NoGameStartedGuard } from './no-game-started.guard';

describe('NoGameStartedGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NoGameStartedGuard]
    });
  });

  it('should ...', inject([NoGameStartedGuard], (guard: NoGameStartedGuard) => {
    expect(guard).toBeTruthy();
  }));
});
