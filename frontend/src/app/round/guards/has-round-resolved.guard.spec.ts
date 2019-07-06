import { TestBed, async, inject } from '@angular/core/testing';

import { HasRoundResolvedGuard } from './has-round-resolved.guard';

describe('HasRoundResolvedGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HasRoundResolvedGuard]
    });
  });

  it('should ...', inject([HasRoundResolvedGuard], (guard: HasRoundResolvedGuard) => {
    expect(guard).toBeTruthy();
  }));
});
