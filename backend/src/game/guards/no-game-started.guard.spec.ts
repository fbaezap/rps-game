import { NoGameStartedGuard } from './no-game-started.guard';

describe('NoGameStartedGuard', () => {
  it('should be defined', () => {
    expect(new NoGameStartedGuard()).toBeDefined();
  });
});
