import { Players } from './player.model';
import { Move } from './move.model';
import { RoundResolved, Round } from '../../round/models/round.model';
import { GameOverException } from '../exceptions/game-over.exception';
import { GameConfig } from './game-config.model';
import { isNullOrUndefined } from 'util';
import { GameOver } from './game-over.model';
import { GameDto } from '../dtos/game.dto';
import { MoveConfig } from './move-config.model';

export class Game {
  readonly players: Players;
  readonly moveConfig: MoveConfig;
  private rounds: RoundResolved[] = [];
  private gameOver: GameOver;
  constructor(gameDto: GameDto) {
    this.players = gameDto.players;
    this.moveConfig = gameDto.moveConfig;
    this.updateGame(gameDto);
  }

  getRounds(): ReadonlyArray<RoundResolved> {
    return this.rounds;
  }
  isGameOver() {
    return !isNullOrUndefined(this.gameOver);
  }
  getGameOver() {
    return this.gameOver;
  }

  updateGame(gameDto: GameDto) {
    this.gameOver = gameDto.gameOver;
    this.rounds = gameDto.rounds;
  }
}
