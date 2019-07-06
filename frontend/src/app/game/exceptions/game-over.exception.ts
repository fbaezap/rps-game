import { GameOver } from '../models/game-over.model';

export class GameOverException extends Error {
  readonly name = 'GameOverException';
  readonly description = 'GameOverException';
  constructor(public readonly gameOver: GameOver) {
    super();
  }
}
