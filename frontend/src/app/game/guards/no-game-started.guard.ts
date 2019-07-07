import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { GameService } from '../services/game.service';

@Injectable({
  providedIn: 'root'
})
export class NoGameStartedGuard implements CanActivate {
  constructor(private gameService: GameService, private router: Router) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean | UrlTree {
    const isGameStarted = this.gameService.isGameStarted();
    if (!isGameStarted) {
      return true;
    } else {
      return this.router.createUrlTree(['/round'], { replaceUrl: true });
    }
  }
}
