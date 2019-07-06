import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoundStartComponent } from './components/round-start/round-start.component';
import { RoundOverComponent } from './components/round-over/round-over.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatStepperModule, MatSelectModule, MatFormFieldModule, MatButtonModule, MatToolbarModule, MatTableModule, MatIconModule, MatSidenavModule, MatBottomSheetModule } from '@angular/material';
import { RoundsScoreComponent } from './components/rounds-score/rounds-score.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { ShowRoundsScoreComponent } from './components/show-rounds-score/show-rounds-score.component';

@NgModule({
  declarations: [RoundStartComponent, RoundOverComponent, RoundsScoreComponent, ShowRoundsScoreComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    MatStepperModule,
    MatSelectModule,
    MatFormFieldModule,
    MatButtonModule,
    MatToolbarModule,
    MatTableModule,
    MatIconModule,
    MatSidenavModule,
    MatBottomSheetModule,
  ],
  exports: [RoundStartComponent, RoundOverComponent, RoundsScoreComponent],
  entryComponents: [ShowRoundsScoreComponent],
})
export class RoundModule { }
