import { Injectable } from '@angular/core';
import { Players } from '../models/player.model';
import { Game } from '../models/game.model';
import { isNullOrUndefined } from 'util';
import { Move } from '../models/move.model';
import { Round, RoundResolved } from '../../round/models/round.model';
import { HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { GameOver } from '../models/game-over.model';
import { GameOverException } from '../exceptions/game-over.exception';
import { GameDto } from '../dtos/game.dto';
import { MoveConfig } from '../models/move-config.model';

export interface DoRoundResponse {
  gameOver: GameOver;
  roundResolved: RoundResolved;
}

@Injectable({
  providedIn: 'root'
})
export class GameService {
  private game: Game;
  constructor(private http: HttpClient) {
    const gameDto = (window as any).gameDto;
    if (!isNullOrUndefined(gameDto)) {
      this.game = new Game(gameDto);
    }
  }

  async startGame(players: Players, moveConfig: MoveConfig) {
    const gameDto = await this.http.post<GameDto>('/api/game', {players, moveConfig}).toPromise();
    this.game = new Game(gameDto);
  }
  async quitGame() {
    await this.http.post('/api/game/quit', {}).toPromise();
    this.game = null;
  }

  isGameStarted() {
    return !isNullOrUndefined(this.game);
  }

  isGameOver() {
    return this.game.isGameOver();
  }

  getGameOver() {
    return this.game.getGameOver();
  }

  getMoves(): ReadonlyArray<Move> {
    return this.game.moveConfig.moves;
  }
  getPlayers(): Players {
    return this.game.players;
  }

  async doRound(round: Round) {
    const gameDto = await this.http.post<GameDto>('/api/game/round', round).toPromise();
    this.game.updateGame(gameDto);
  }

  getRounds(): ReadonlyArray<RoundResolved> {
    return this.game.getRounds();
  }
}
