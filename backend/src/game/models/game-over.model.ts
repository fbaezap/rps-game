import { Player, Players } from './player.model';
import { RoundResolved } from './round.model';

export interface GameOver {
  winner: Player;
  rounds: RoundResolved[];
  players: Players;
}
