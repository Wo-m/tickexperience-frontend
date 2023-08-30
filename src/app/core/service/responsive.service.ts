import { Injectable } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { CacheConstants } from '../constant/cache.constant';

@Injectable({
  providedIn: 'root'
})
export class ResponsiveService {

  constructor(private responsive: BreakpointObserver) {
    this.responsive.observe([Breakpoints.HandsetPortrait])
      .subscribe(result => {
        const breakpoints = result.breakpoints;
        if (breakpoints[Breakpoints.HandsetPortrait]) {
          sessionStorage.setItem(CacheConstants.screen, 'phone')
        } else {
          sessionStorage.setItem(CacheConstants.screen, 'desktop')
        }
      });
  }

  isPhone(): boolean {
    return sessionStorage.getItem(CacheConstants.screen) === 'phone';
  }
}
