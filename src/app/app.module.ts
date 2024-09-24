import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AccountsComponent } from './components/accounts/accounts.component';
import { CustomerAccountsComponent } from './components/customer-accounts/customer-accounts.component';
import { CustomersComponent } from './components/customers/customers.component';
import { NewCustomerComponent } from './components/new-customer/new-customer.component';
import {HttpClientModule} from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AccountsComponent,
    CustomerAccountsComponent,
    CustomersComponent,
    NewCustomerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
