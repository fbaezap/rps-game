import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DifferentValidator } from '../../validators/different.validator';
import { GameService } from '../../services/game.service';
import { Players } from '../../models/player.model';
import { Router } from '@angular/router';
import { Move } from '../../models/move.model';

@Component({
  selector: 'app-game-start',
  templateUrl: './game-start.component.html',
  styleUrls: ['./game-start.component.scss']
})
export class GameStartComponent implements OnInit {
  formGroup: FormGroup;
  submitting: boolean;
  movesOptions = [{
    value: ['Scissors', 'Paper', 'Rocks'],
    viewValue: 'Three Options',
    explain: 'You play with Scissors > Paper > Rock > Scissors',
  }, {
    value: ['Scissors', 'String', 'Dog', 'Paper', 'Rocks'],
    viewValue: 'Five Options',
    explain: 'You play with Scissors > String > Dog > Paper > Rock > Scissors',
  }, {
    value: ['Scissors', 'Paper', 'Rock'].reverse(),
    viewValue: 'Three Options Inverted',
    explain: 'You play with Rock > Paper > Scissors',
  }, {
    value: ['Scissors', 'String', 'Dog', 'Paper', 'Rocks'].reverse(),
    viewValue: 'Five Options Inverted',
    explain: 'You play with Rock > Paper > Dog > String > Scissors > Rock',
  }];

  constructor(
    private fb: FormBuilder,
    private gameService: GameService,
    private router: Router,
  ) {
    this.formGroup = this.fb.group({
      playerOne: null,
      playerTwo: null,
      moves: [
        this.movesOptions[0]
      ],
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
      const {playerOne, playerTwo, moves} = this.formGroup.value;
      await this.gameService.startGame(
        {playerOne, playerTwo} as Players,
        moves.value as Move[],
      );
      await this.router.navigate(['/round'], {replaceUrl: true});
    } catch (error) {
      console.error(error);
    } finally {
      this.submitting = false;
    }
  }
}
