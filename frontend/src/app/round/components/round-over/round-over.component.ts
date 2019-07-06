import { Component, OnInit } from '@angular/core';
import { GameService } from '../../../game/services/game.service';
import { RoundResolved } from '../../models/round.model';
import { MatTableDataSource } from '@angular/material';
import { Move } from '../../../game/models/move.model';
import { Players, Player } from '../../../game/models/player.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-round-over',
  templateUrl: './round-over.component.html',
  styleUrls: ['./round-over.component.scss']
})
export class RoundOverComponent {
  readonly rounds: ReadonlyArray<RoundResolved>;
  readonly players: Players;
  readonly lastRound: RoundResolved;

  constructor(
    private gameService: GameService,
    private router: Router,
  ) {
    this.players = this.gameService.getPlayers();
    this.rounds = this.gameService.getRounds();
    if (this.rounds.length > 0) {
      this.lastRound = this.rounds[this.rounds.length - 1];
    }
  }

  nextRound() {
    this.router.navigate(['/round']);
  }
}
