import { Component } from '@angular/core';
import {NavigationService} from './shared/services/navigation.service';

@Component({
  selector: 'et-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private navigationService: NavigationService) {
    const menu = [
      {
        key: 'users',
        name: 'Users',
        router: '/users',
        icon: 'person'
      },
      {
        key: 'timesheets',
        name: 'Time Sheets',
        router: '/timesheets',
        icon: 'av_timer'
      }
    ];
    menu.forEach(item => this.navigationService.addItem(item));
  }
}
