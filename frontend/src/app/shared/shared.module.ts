import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuitGameComponent } from './components/quit-game/quit-game.component';
import { MatIconModule, MatButtonModule, MatTooltipModule } from '@angular/material';

@NgModule({
  declarations: [QuitGameComponent],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
  ],
  exports: [QuitGameComponent],
})
export class SharedModule { }
