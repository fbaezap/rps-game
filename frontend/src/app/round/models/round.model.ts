import { Player } from '../../game/models/player.model';

export interface Round {
  playerOneMove: number;
  playerTwoMove: number;
}

export interface RoundResolved {
  round: Round;
  winner: Player;
}
