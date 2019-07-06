import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule, MatFormFieldModule, MatButtonModule, MatToolbarModule } from '@angular/material';
import { GameStartComponent } from './components/game-start/game-start.component';
import { GameOverComponent } from './components/game-over/game-over.component';
import { RoundModule } from '../round/round.module';

@NgModule({
  declarations: [GameStartComponent, GameOverComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RoundModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatToolbarModule,
  ],
  exports: [GameStartComponent, GameOverComponent],
})
export class GameModule { }
