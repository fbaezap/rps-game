import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GameStartComponent } from './game/components/game-start/game-start.component';
import { RoundStartComponent } from './round/components/round-start/round-start.component';
import { RoundOverComponent } from './round/components/round-over/round-over.component';
import { GameStartedGuard } from './game/guards/game-started.guard';
import { NoGameStartedGuard } from './game/guards/no-game-started.guard';
import { GameOverComponent } from './game/components/game-over/game-over.component';
import { HasRoundResolvedGuard } from './round/guards/has-round-resolved.guard';
import { GameOverGuard } from './game/guards/game-over.guard';
import { NoGameOverGuard } from './game/guards/no-game-over.guard';

const routes: Routes = [{
  path: '',
  component: GameStartComponent,
  canActivate: [NoGameStartedGuard],
}, {
  path: 'round',
  canActivate: [GameStartedGuard, NoGameOverGuard],
  children: [{
    path: '',
    component: RoundStartComponent,
  }, {
    path: 'over',
    component: RoundOverComponent,
    canActivate: [HasRoundResolvedGuard],
  }, {
    path: '**',
    redirectTo: '',
  }]
}, {
  path: 'game-over',
  component: GameOverComponent,
  canActivate: [GameStartedGuard, GameOverGuard],
}, {
  path: '**',
  redirectTo: '',
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
