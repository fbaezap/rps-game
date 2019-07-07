import { Controller, Get, Session, Body, Post, UseGuards } from '@nestjs/common';
import { StartGameDto } from './dtos/start-game.dto';
import { Game } from './models/game.model';
import { DoRoundDto } from './dtos/do-round.dto';
import { Round, RoundResolved } from './models/round.model';
import { Players } from './models/player.model';
import { Move } from './models/move.model';
import { isNullOrUndefined } from 'util';
import { GameStartedGuard } from './guards/game-started.guard';
import { NoGameOverGuard } from './guards/no-game-over.guard';
import { NoGameStartedGuard } from './guards/no-game-started.guard';
import { GameService } from './game.service';

@Controller('api/game')
export class GameController {
  constructor(private gameService: GameService) {}
  @Post('quit')
  @UseGuards(GameStartedGuard)
  quitGame(@Session() session: any) {
    session.game = null;
    return session.game;
  }

  @Post('round')
  @UseGuards(GameStartedGuard, NoGameOverGuard)
  doRound(@Session() session: any, @Body() doRoundDto: DoRoundDto) {
    const round = doRoundDto;
    const game: Game = session.game;
    const rounds = game.rounds;
    const players = game.players;
    const gameConfig = game.gameConfig;
    const winner = this.gameService.getRoundWinner(game, round);
    const roundResolved: RoundResolved = {round, winner};
    rounds.push(roundResolved);
    if (isNullOrUndefined(winner)) {
      return null;
    }
    const roundsWon = rounds.filter((r: any) => r.winner === winner).length;
    if (roundsWon >= gameConfig.maximumRoundsWon) {
      const gameOver = {winner, rounds, players};
      game.gameOver = gameOver;
    }
    return game;
  }

  @Get()
  getGame(@Session() session: any) {
    return session.game;
  }

  @Post()
  @UseGuards(NoGameStartedGuard)
  startGame(@Session() session: any, @Body() startGameDto: StartGameDto) {
    session.game = {
      players: startGameDto.players,
      moves: ['Scissors', 'Paper', 'Rock'],
      gameConfig: {
        maximumRoundsWon: 3,
      },
      rounds: [],
      gameOver: null,
    } as Game;
    return session.game;
  }
}
