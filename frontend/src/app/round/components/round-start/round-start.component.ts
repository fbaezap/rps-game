import { Component, OnInit } from '@angular/core';
import { GameService } from '../../../game/services/game.service';
import { Move } from '../../../game/models/move.model';
import { Round, RoundResolved } from '../../models/round.model';
import { Players } from '../../../game/models/player.model';
import { Router } from '@angular/router';
import { GameOverException } from '../../../game/exceptions/game-over.exception';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatBottomSheet } from '@angular/material';
import { ShowRoundsScoreComponent } from '../show-rounds-score/show-rounds-score.component';

@Component({
  selector: 'app-round-start',
  templateUrl: './round-start.component.html',
  styleUrls: ['./round-start.component.scss']
})
export class RoundStartComponent implements OnInit {
  readonly moves: ReadonlyArray<Move>;
  readonly players: Players;
  readonly formGroup: FormGroup;
  submitting: boolean;
  rounds: ReadonlyArray<RoundResolved>;

  constructor(
    private gameService: GameService,
    private fb: FormBuilder,
    private router: Router,
    private bottomSheet: MatBottomSheet,
  ) {
    this.formGroup = this.fb.group({
      playerOneMove: null,
      playerTwoMove: null,
    });
    this.players = this.gameService.getPlayers();
    this.moves = this.gameService.getMoves();
    this.rounds = this.gameService.getRounds();
  }

  ngOnInit() {
  }

  showScores() {
    this.bottomSheet.open(ShowRoundsScoreComponent);
  }

  async onSubmit() {
    if (this.formGroup.invalid || this.submitting) {
      return;
    }
    try {
      this.submitting = true;
      const {playerOneMove, playerTwoMove} = this.formGroup.value;
      await this.gameService.doRound({playerOneMove, playerTwoMove});
      if (this.gameService.isGameOver()) {
        await this.router.navigate(['/game/over']);
      } else {
        await this.router.navigate(['/round/over']);
      }
    } finally {
      this.submitting = false;
    }
  }
}
