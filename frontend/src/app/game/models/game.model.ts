import { Players } from './player.model';
import { Move } from './move.model';
import { RoundResolved, Round } from '../../round/models/round.model';
import { GameOverException } from '../exceptions/game-over.exception';
import { GameConfig } from './game-config.model';
import { isNullOrUndefined } from 'util';
import { GameOver } from './game-over.model';

export class Game {
  private rounds: RoundResolved[] = [];
  readonly moves: ReadonlyArray<Move> = ['Scissors', 'Paper', 'Rock'];
  readonly gameConfig: GameConfig = {
    maximumRoundsWon: 3,
  };
  private gameOver: GameOver;
  constructor(public readonly players: Players) {
  }

  getRounds(): ReadonlyArray<RoundResolved> {
    return this.rounds;
  }
  doRound(round: Round) {
    const winner = this.getRoundWinner(round);
    const rounds = this.rounds;
    const players = this.players;
    const roundResolved: RoundResolved = {round, winner};
    rounds.push(roundResolved);
    if (isNullOrUndefined(winner)) {
      return null;
    }
    const roundsWon = rounds.filter(r => r.winner === winner).length;
    if (roundsWon >= this.gameConfig.maximumRoundsWon) {
      this.gameOver = {winner, rounds, players};
      throw new GameOverException(this.gameOver);
    }
    return roundResolved;
  }
  isGameOver() {
    return !isNullOrUndefined(this.gameOver);
  }
  getGameOver() {
    return this.gameOver;
  }
  private getRoundWinner(round: Round) {
    if (this.isMoveKilling(round.playerOneMove, round.playerTwoMove)) {
      return this.players.playerOne;
    }
    if (this.isMoveKilling(round.playerTwoMove, round.playerOneMove)) {
      return this.players.playerTwo;
    }
    return null;
  }
  private isMoveKilling(move: number, victim: number) {
    return (move + 1) % this.moves.length === victim;
  }
}
