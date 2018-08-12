import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LayoutModule } from '@angular/cdk/layout';
import { RouterModule } from '@angular/router';

import { MaterialModule } from './shared/material-components.module';
import { AppComponent } from './app.component';
import { TopNavComponent } from './shared/components/top-nav/top-nav.component';
import { UserBadgeComponent } from './shared/components/user-badge/user-badge.component';
import { NavigationComponent } from './shared/components/navigation/navigation.component';

import { NavigationService } from './shared/services/navigation.service';

import { UsersComponent } from './pages/users/users.component';
import { TimesheetsComponent } from './pages/timesheets/timesheets.component';
import { InvoicesComponent } from './pages/invoices/invoices.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { ExpensesComponent } from './pages/expenses/expenses.component';
import { PurchaseOrdersComponent } from './pages/purchase-orders/purchase-orders.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { HomeComponent } from './pages/home/home.component';
import { UserDetailsComponent } from './pages/user-details/user-details.component';
import { TimesheetDetailsComponent } from './pages/timesheet-details/timesheet-details.component';
import { ExpenseDetailsComponent } from './pages/expense-details/expense-details.component';
import { QuotesComponent } from './pages/quotes/quotes.component';
import { QuoteDetailsComponent } from './pages/quote-details/quote-details.component';
import { LoginComponent } from './login/login.component';
import { PurchaseOrderDetailsComponent } from './pages/purchase-order-details/purchase-order-details.component';

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
    PurchaseOrdersComponent,
    NotFoundComponent,
    HomeComponent,
    UserDetailsComponent,
    TimesheetDetailsComponent,
    ExpenseDetailsComponent,
    QuotesComponent,
    QuoteDetailsComponent,
    LoginComponent,
    PurchaseOrderDetailsComponent,
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    MaterialModule,
    LayoutModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'login', component: LoginComponent },
      { path: 'users', component: UsersComponent },
      { path: 'users/:id', component: UserDetailsComponent },
      { path: 'profile', component: ProfileComponent },
      { path: 'timesheets', component: TimesheetsComponent },
      { path: 'timesheets/:id', component: TimesheetDetailsComponent },
      { path: 'invoices', component: InvoicesComponent },
      { path: 'expenses', component: ExpensesComponent },
      { path: 'expenses/:id', component: ExpenseDetailsComponent },
      { path: 'quotes', component: QuotesComponent },
      { path: 'quotes/:id', component: QuoteDetailsComponent },
      { path: 'purchase-orders', component: PurchaseOrdersComponent },
      { path: 'purchase-orders/:id', component: PurchaseOrderDetailsComponent },
      { path: '**', component: NotFoundComponent }
    ]),
  ],
  providers: [
    NavigationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
