import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { Players } from '../models/player.model';
import { Move } from '../models/move.model';
import { GameConfig } from '../models/game-config.model';
import { RoundResolved } from '../models/round.model';
import { GameOver } from '../models/game-over.model';
import { MoveConfig } from '../models/move-config.model';

@Entity()
export class Game {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  winner: string;

  @Column('simple-json')
  players: Players;

  @Column('simple-json')
  moveConfig: MoveConfig;

  @Column('simple-json')
  gameConfig: GameConfig;

  @Column('simple-json')
  rounds: RoundResolved[];

  @Column('simple-json')
  gameOver: GameOver;
}
