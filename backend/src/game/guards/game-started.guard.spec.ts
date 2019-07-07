import { GameStartedGuard } from './game-started.guard';

describe('GameStartedGuard', () => {
  it('should be defined', () => {
    expect(new GameStartedGuard()).toBeDefined();
  });
});
