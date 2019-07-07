import { Move } from './move.model';

export interface MoveConfig {
  readonly inverted: boolean;
  readonly moves: ReadonlyArray<Move>;
}
