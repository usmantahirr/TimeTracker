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
      },
      {
        key: 'expenses',
        name: 'Expenses',
        router: '/expenses',
        icon: 'money_off'
      },
      {
        key: 'invoices',
        name: 'Invoices',
        router: '/invoices',
        icon: 'report'
      },
      {
        key: 'quotes',
        name: 'Quotes',
        router: '/quotes',
        icon: 'format_quote'
      },
      {
        key: 'PO',
        name: 'Purchase Orders',
        router: '/purchase-orders',
        icon: 'assignment'
      },
    ];
    menu.forEach(item => this.navigationService.addItem(item));
  }
}
