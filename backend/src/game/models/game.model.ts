import { Players } from './player.model';
import { Move } from './move.model';
import { GameConfig } from './game-config.model';
import { RoundResolved } from './round.model';
import { GameOver } from './game-over.model';

export interface SessionGame {
  readonly players: Players;
  readonly moves: Move[];
  readonly gameConfig: GameConfig;
  readonly rounds: RoundResolved[];
  gameOver: GameOver;
}
