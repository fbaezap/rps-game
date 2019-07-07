import { Injectable } from '@nestjs/common';
import { Game } from './models/game.model';
import { Round } from './models/round.model';

@Injectable()
export class GameService {
  getRoundWinner(game: Game, round: Round) {
    const moves = game.moves;
    const players = game.players;
    if (this.isMoveKilling(game, round.playerOneMove, round.playerTwoMove)) {
      return players.playerOne;
    }
    if (this.isMoveKilling(game, round.playerTwoMove, round.playerOneMove)) {
      return players.playerTwo;
    }
    return null;
  }
  isMoveKilling(game: Game, move: number, victim: number) {
    const moves = game.moves;
    return (move + 1) % moves.length === victim;
  }
}
