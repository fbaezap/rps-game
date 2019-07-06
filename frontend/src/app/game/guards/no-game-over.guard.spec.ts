import { TestBed, async, inject } from '@angular/core/testing';

import { NoGameOverGuard } from './no-game-over.guard';

describe('NoGameOverGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NoGameOverGuard]
    });
  });

  it('should ...', inject([NoGameOverGuard], (guard: NoGameOverGuard) => {
    expect(guard).toBeTruthy();
  }));
});
