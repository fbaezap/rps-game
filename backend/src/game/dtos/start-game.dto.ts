import { IsNotEmpty, ValidateNested, ArrayUnique, ArrayMinSize, ArrayNotContains } from 'class-validator';
import { Type } from 'class-transformer';
import { Players } from '../models/player.model';
import { PlayersDto } from './players.dto';

export class StartGameDto {
  @IsNotEmpty()
  @ValidateNested()
  @Type(() => PlayersDto)
  players: Players;

  @IsNotEmpty()
  @ArrayNotContains(['', null, undefined])
  @ArrayMinSize(3)
  @ArrayUnique()
  moves: string[];
}
