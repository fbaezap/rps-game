import { IsNotEmpty, ArrayNotContains, ArrayMinSize, ArrayUnique } from 'class-validator';

export class MoveConfigDto {
  @IsNotEmpty()
  @ArrayNotContains(['', null, undefined])
  @ArrayMinSize(3)
  @ArrayUnique()
  moves: string[];

  @IsNotEmpty()
  inverted: boolean;
}
