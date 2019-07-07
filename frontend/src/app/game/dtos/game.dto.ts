import { RoundResolved } from '../../round/models/round.model';
import { GameConfig } from '../models/game-config.model';
import { GameOver } from '../models/game-over.model';
import { MoveConfig } from '../models/move-config.model';
import { Players } from '../models/player.model';

export interface GameDto {
  readonly gameOver: GameOver;
  readonly players: Players;
  readonly moveConfig: MoveConfig;
  readonly gameConfig: GameConfig;
  readonly rounds: RoundResolved[];
}
