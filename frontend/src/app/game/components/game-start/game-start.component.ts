import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DifferentValidator } from '../../validators/different.validator';
import { GameService } from '../../services/game.service';
import { Players } from '../../models/player.model';
import { Router } from '@angular/router';
import { Move } from '../../models/move.model';
import { MoveConfig } from '../../models/move-config.model';

@Component({
  selector: 'app-game-start',
  templateUrl: './game-start.component.html',
  styleUrls: ['./game-start.component.scss']
})
export class GameStartComponent implements OnInit {
  formGroup: FormGroup;
  submitting: boolean;
  movesConfig: { viewValue: string; value: MoveConfig & { explain: string }; }[] = [{
    value: {
      moves: ['Scissors', 'Paper', 'Rocks'],
      inverted: false,
      explain: 'You play with Scissors > Paper > Rock > Scissors'
    },
    viewValue: 'Three Options',
  }, {
    value: {
      moves: ['Scissors', 'String', 'Dog', 'Paper', 'Rocks'],
      inverted: false,
      explain: 'You play with Scissors > String > Dog > Paper > Rock > Scissors',
    },
    viewValue: 'Five Options',
  }, {
    value: {
      moves: ['Scissors', 'Paper', 'Rock'],
      inverted: true,
      explain: 'You play with Rock > Paper > Scissors > Rock',
    },
    viewValue: 'Three Options Inverted',
  }, {
    value: {
      moves: ['Scissors', 'String', 'Dog', 'Paper', 'Rocks'],
      inverted: true,
      explain: 'You play with Rock > Paper > Dog > String > Scissors > Rock',
    },
    viewValue: 'Five Options Inverted',
  }];

  constructor(
    private fb: FormBuilder,
    private gameService: GameService,
    private router: Router,
  ) {
    this.formGroup = this.fb.group({
      playerOne: null,
      playerTwo: null,
      moveConfig: [
        this.movesConfig[0].value
      ],
    }, {
        validators: [DifferentValidator.validate(['playerOne', 'playerTwo'])]
      });

    this.formGroup.valueChanges.subscribe(() => {
      if (this.formGroup.hasError('different')) {
        const error = this.formGroup.getError('different');
        this.formGroup.get('playerTwo').setErrors({ different: error });
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
      const { playerOne, playerTwo, moveConfig } = this.formGroup.value;
      await this.gameService.startGame(
        { playerOne, playerTwo } as Players,
        moveConfig as MoveConfig,
      );
      await this.router.navigate(['/round'], { replaceUrl: true });
    } catch (error) {
      console.error(error);
    } finally {
      this.submitting = false;
    }
  }
}
