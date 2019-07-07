import { GameConfig } from './game-config.model';
import { GameOver } from './game-over.model';
import { MoveConfig } from './move-config.model';
import { Players } from './player.model';
import { RoundResolved } from './round.model';

export interface SessionGame {
  readonly players: Players;
  readonly moveConfig: MoveConfig;
  readonly gameConfig: GameConfig;
  readonly rounds: RoundResolved[];
  gameOver: GameOver;
}
