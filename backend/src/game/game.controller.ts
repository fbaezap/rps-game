import { Controller, Get, Session } from '@nestjs/common';

@Controller('api/game')
export class GameController {
  @Get()
  index(@Session() session: any) {
    return session;
  }
}
