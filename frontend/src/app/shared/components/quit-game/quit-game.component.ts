import { Component, OnInit } from '@angular/core';
import { GameService } from '../../../game/services/game.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quit-game',
  templateUrl: './quit-game.component.html',
  styleUrls: ['./quit-game.component.scss']
})
export class QuitGameComponent {

  constructor(private gameService: GameService, private router: Router) { }

  async onClick() {
    await this.gameService.quitGame();
    this.router.navigate(['/']);
  }
}
