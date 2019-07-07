import { IsNotEmpty, ValidateNested } from 'class-validator';
import { Players } from '../models/player.model';

export class StartGameDto {
  @IsNotEmpty()
  @ValidateNested()
  players: Players;
}
