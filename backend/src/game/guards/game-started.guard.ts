import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { GameService } from '../game.service';
import { Request } from 'express';
import { isNullOrUndefined } from 'util';

@Injectable()
export class GameStartedGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request: Request = context.switchToHttp().getRequest();
    return !isNullOrUndefined(request.session.game);
  }
}
