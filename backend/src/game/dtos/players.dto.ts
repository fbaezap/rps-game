import { IsNotEmpty } from 'class-validator';

export class PlayersDto {
  @IsNotEmpty()
  playerOne: string;

  @IsNotEmpty()
  playerTwo: string;
}
