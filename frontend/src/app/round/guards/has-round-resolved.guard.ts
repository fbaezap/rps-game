import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { GameService } from '../../game/services/game.service';

@Injectable({
  providedIn: 'root'
})
export class HasRoundResolvedGuard implements CanActivate {
  constructor(private gameService: GameService, private router: Router) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.gameService.getRounds().length > 0) {
      return true;
    } else {
      return this.router.createUrlTree(['/round']);
    }
  }
}
