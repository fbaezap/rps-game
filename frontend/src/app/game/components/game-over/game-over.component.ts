import { Component, OnInit } from '@angular/core';
import { GameService } from '../../services/game.service';
import { Router } from '@angular/router';
import { GameOver } from '../../models/game-over.model';

@Component({
  selector: 'app-game-over',
  templateUrl: './game-over.component.html',
  styleUrls: ['./game-over.component.scss']
})
export class GameOverComponent {
  gameOver: GameOver;
  roundsByPlayer: { playerOne: number; playerTwo: number; };

  constructor(private gameService: GameService, private router: Router) {
    this.gameOver = this.gameService.getGameOver();
    this.roundsByPlayer = {
      playerOne: 0,
      playerTwo: 0,
    };
    const players = this.gameService.getPlayers();
    const rounds = this.gameService.getRounds();
    rounds.forEach((r) => {
      if (r.winner === players.playerOne) {
        this.roundsByPlayer.playerOne++;
      }
      if (r.winner === players.playerTwo) {
        this.roundsByPlayer.playerTwo++;
      }
    });
  }

  async playAgain() {
    await this.gameService.quitGame();
    await this.router.navigate(['/']);
  }
}
