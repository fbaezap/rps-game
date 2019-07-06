import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap, share } from 'rxjs/operators';
import { BreakpointObserver } from '@angular/cdk/layout';

@Injectable({
  providedIn: 'root'
})
export class MobileService {
  readonly query = '(max-width: 1200px)';
// tslint:disable-next-line: variable-name
  private  _isMobile: boolean;
  readonly isMobile$: Observable<boolean>;
  get isMobile() {
    return this._isMobile;
  }

  constructor(private breakpointObserver: BreakpointObserver) {
    this._isMobile = this.breakpointObserver.isMatched(this.query);
    this.isMobile$ = this.breakpointObserver.observe(this.query).pipe(
      map((s) => s.matches),
      tap((s) => this._isMobile = s),
      share()
    );
  }
}
