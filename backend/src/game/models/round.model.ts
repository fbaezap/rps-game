import { Player } from './player.model';

export interface Round {
  playerOneMove: number;
  playerTwoMove: number;
}

export interface RoundResolved {
  round: Round;
  winner: Player;
}
