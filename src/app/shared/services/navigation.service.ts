import { Injectable } from '@angular/core';
import { NavItem } from '../interfaces/navItem';
import isEqual from 'lodash-es/isEqual';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  private _items = new BehaviorSubject<NavItem[]>([]);
  items$ = this._items.asObservable();

  constructor() {}

  get items(): NavItem[] {
    return this._items.getValue();
  }

  set items(items: NavItem[]) {
    this._items.next(items);
  }

  addItem(item: NavItem) {
    const foundIndex = this.items.findIndex((existingItem) => isEqual(existingItem, item));
    if (foundIndex === -1) {
      this.items = [...this.items, item];
    }
  }
}

/*
Service used to add and remove navigation items.
Since it's singleton it will hold all the items at one place.
 */
