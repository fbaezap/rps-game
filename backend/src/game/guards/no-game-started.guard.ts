import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { GameService } from '../game.service';
import { isNullOrUndefined } from 'util';
import { Request } from 'express';

@Injectable()
export class NoGameStartedGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request: Request = context.switchToHttp().getRequest();
    return isNullOrUndefined(request.session.game);
  }
}
