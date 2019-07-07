import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { Request } from 'express';
import { isNullOrUndefined } from 'util';

@Injectable()
export class NoGameOverGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request: Request = context.switchToHttp().getRequest();
    return isNullOrUndefined(request.session.game && request.session.game.gameOver);
  }
}
