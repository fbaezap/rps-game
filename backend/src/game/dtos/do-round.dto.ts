import { IsNotEmpty } from 'class-validator';

export class DoRoundDto {
  @IsNotEmpty()
  playerOneMove: number;

  @IsNotEmpty()
  playerTwoMove: number;
}
