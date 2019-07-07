import { Players } from '../models/player.model';
import { Move } from '../models/move.model';
import { GameConfig } from '../models/game-config.model';
import { RoundResolved } from '../../round/models/round.model';
import { GameOver } from '../models/game-over.model';

export interface GameDto {
  readonly gameOver: GameOver;
  readonly players: Players;
  readonly moves: ReadonlyArray<Move>;
  readonly gameConfig: GameConfig;
  readonly rounds: RoundResolved[];
}
