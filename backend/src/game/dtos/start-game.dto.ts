import { Type } from 'class-transformer';
import { IsNotEmpty, ValidateNested } from 'class-validator';
import { Players } from '../models/player.model';
import { MoveConfigDto } from './move-config.dto';
import { PlayersDto } from './players.dto';

export class StartGameDto {
  @IsNotEmpty()
  @ValidateNested()
  @Type(() => PlayersDto)
  players: Players;

  @IsNotEmpty()
  @ValidateNested()
  @Type(() => MoveConfigDto)
  moveConfig: MoveConfigDto;
}
