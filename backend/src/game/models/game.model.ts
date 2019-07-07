import { Players } from './player.model';
import { Move } from './move.model';
import { GameConfig } from './game-config.model';
import { RoundResolved } from './round.model';
import { GameOver } from './game-over.model';

export interface Game {
  readonly players: Players;
  readonly moves: ReadonlyArray<Move>;
  readonly gameConfig: GameConfig;
  rounds: RoundResolved[];
  gameOver: GameOver;
}
