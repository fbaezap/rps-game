import { Component, Input, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { Players } from '../../../game/models/player.model';
import { RoundResolved } from '../../models/round.model';
import { GameService } from '../../../game/services/game.service';
import { coerceBooleanProperty } from '@angular/cdk/coercion';

@Component({
  selector: 'app-rounds-score',
  templateUrl: './rounds-score.component.html',
  styleUrls: ['./rounds-score.component.scss']
})
export class RoundsScoreComponent {
  readonly displayedColumns = ['round', 'playerOne', 'playerTwo'];
  readonly dataSource: MatTableDataSource<RoundResolved>;
  readonly rounds: ReadonlyArray<RoundResolved>;
  readonly players: Players;
// tslint:disable-next-line: variable-name
  private _highlightLast: boolean;
  @Input()
  set highlightLast(highlightLast: boolean) {
    this._highlightLast = coerceBooleanProperty(highlightLast);
  }
  get highlightLast() { return this._highlightLast; }

  constructor(private gameService: GameService) {
    this.players = this.gameService.getPlayers();
    this.rounds = this.gameService.getRounds();
    this.dataSource = new MatTableDataSource([...this.rounds]);
  }

  getIcon(isWinner: boolean, isLast: boolean) {
    let startIcon = 'grade'
    if (this.highlightLast && isLast) {
      startIcon = 'stars';
    }
    return isWinner ? startIcon : 'remove';
  }
}
