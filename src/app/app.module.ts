import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from './shared/material-components.module';

import { AppComponent } from './app.component';
import { TopNavComponent } from './shared/components/top-nav/top-nav.component';
import { UserBadgeComponent } from './shared/components/user-badge/user-badge.component';
import { NavigationComponent } from './shared/components/navigation/navigation.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
import { UsersComponent } from './pages/users/users.component';
import { TimesheetsComponent } from './pages/timesheets/timesheets.component';
import { InvoicesComponent } from './pages/invoices/invoices.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { ExpensesComponent } from './pages/expenses/expenses.component';
import { PurchaseOrdersComponent } from './pages/purchase-orders/purchase-orders.component';
import {NavigationService} from './shared/services/navigation.service';

@NgModule({
  declarations: [
    AppComponent,
    TopNavComponent,
    UserBadgeComponent,
    NavigationComponent,
    UsersComponent,
    TimesheetsComponent,
    InvoicesComponent,
    ProfileComponent,
    ExpensesComponent,
    PurchaseOrdersComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    MaterialModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
  ],
  providers: [
    NavigationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
