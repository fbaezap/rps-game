import { Injectable } from '@nestjs/common';
import { Round } from './models/round.model';
import { InjectRepository } from '@nestjs/typeorm';
import { Game } from './entities/game.entity';
import { Repository } from 'typeorm';
import { SessionGame } from './models/game.model';
import { isNullOrUndefined } from 'util';

@Injectable()
export class GameService {
  constructor(@InjectRepository(Game) private readonly gameRepository: Repository<Game>) {}
  getRoundWinner(game: SessionGame, round: Round) {
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
  isMoveKilling(game: SessionGame, move: number, victim: number) {
    const moves = game.moves;
    return (move + 1) % moves.length === victim;
  }
  isGameOver(game: SessionGame) {
    return !isNullOrUndefined(game && game.gameOver);
  }

  saveGame(sessionGame: SessionGame) {
    if (!this.isGameOver(sessionGame)) {
      throw new Error(`You can't save a game that is not over`);
    }
    const game = this.gameRepository.create(sessionGame);
    game.winner = sessionGame.gameOver.winner;
    this.gameRepository.save(game);
  }
}
