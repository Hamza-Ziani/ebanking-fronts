import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomersComponent } from './components/customers/customers.component';
import { AccountsComponent } from './components/accounts/accounts.component';
import { NewCustomerComponent } from './components/new-customer/new-customer.component';
import { CustomerAccountsComponent } from './components/customer-accounts/customer-accounts.component';
import { LoginComponent } from './auth/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RegisterComponent } from './auth/register/register.component';
import { AuthenticationGuard } from './guards/authentication.guard';
import { AuthorizationGuard } from './guards/authorization.guard';
import { NotAuthorizationComponent } from './components/not-authorization/not-authorization.component';

const routes: Routes = [

  { path :"login", component : LoginComponent},
  { path :"register", component : RegisterComponent},
  { path :"", redirectTo : "login", pathMatch : "full"},

  {
    path: "dashboard",
    component: DashboardComponent,
    canActivate: [AuthenticationGuard],
    children: [
      { path: "customers", component: CustomersComponent },
      { path: "accounts", component: AccountsComponent },
      { path: "new-customer", component: NewCustomerComponent,canActivate: [AuthorizationGuard],data: { roles: ["ADMIN"] } },
      { path: "customer-accounts/:id", component: CustomerAccountsComponent },
      {path:"not-authorized",component:NotAuthorizationComponent},
    ],
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
