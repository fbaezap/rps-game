import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DifferentValidator } from '../../validators/different.validator';
import { GameService } from '../../services/game.service';
import { Players } from '../../models/player.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-game-start',
  templateUrl: './game-start.component.html',
  styleUrls: ['./game-start.component.scss']
})
export class GameStartComponent implements OnInit {
  formGroup: FormGroup;
  submitting: boolean;

  constructor(
    private fb: FormBuilder,
    private gameService: GameService,
    private router: Router,
  ) {
    this.formGroup = this.fb.group({
      playerOne: null,
      playerTwo: null,
    }, {
      validators: [DifferentValidator.validate(['playerOne', 'playerTwo'])]
    });

    this.formGroup.valueChanges.subscribe(() => {
      if (this.formGroup.hasError('different')) {
        const error = this.formGroup.getError('different');
        this.formGroup.get('playerTwo').setErrors({different: error});
      }
    }, (error: any) => console.error(error));
  }

  ngOnInit() {
  }

  async onSubmit() {
    if (this.formGroup.invalid || this.submitting) {
      return;
    }
    try {
      this.submitting = true;
      const {playerOne, playerTwo} = this.formGroup.value;
      await this.gameService.startGame(
        {playerOne, playerTwo} as Players
      );
      await this.router.navigate(['/round'], {replaceUrl: true});
    } catch (error) {
      console.error(error);
    } finally {
      this.submitting = false;
    }
  }
}
