import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { NavigationService } from '../../services/navigation.service';
import { NavItem } from '../../interfaces/navItem';

@Component({
  selector: 'et-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  navItems: NavItem[];

  constructor(private breakpointObserver: BreakpointObserver, private navigationService: NavigationService) {
    navigationService.items$.subscribe((items: NavItem[]) => {
      this.navItems = items;
    });
  }
}
