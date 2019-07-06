import { Injectable } from '@angular/core';
import { Players } from '../models/player.model';
import { Game } from '../models/game.model';
import { isNullOrUndefined } from 'util';
import { Move } from '../models/move.model';
import { Round } from '../../round/models/round.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  private game: Game;
  constructor() {
    /* this.startGame({
      playerOne: 'Sandri',
      playerTwo: 'Francis',
    }); */
  }

  startGame(players: Players) {
    this.game = new Game(players);
  }
  quitGame() {
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
    return this.game.moves;
  }
  getPlayers(): Players {
    return this.game.players;
  }

  doRound(round: Round) {
    return this.game.doRound(round);
  }

  getRounds() {
    return this.game.getRounds();
  }
}
