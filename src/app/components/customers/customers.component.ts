import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../services/customer.service';
import { Customer } from '../models/customer.model';
import { catchError, Observable, throwError } from 'rxjs';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
searchFormGroup!: FormGroup;
customers$!: Observable<Customer[]>;
errorMessage: any;



  constructor(
    private customerService:CustomerService,
    private fb : FormBuilder,
    private router :Router

  ) { }

  ngOnInit(): void {
    this.searchFormGroup = this.fb.group({
      keyword : this.fb.control("")
    })
    this.handleGetCustomers();
    this.handleSearchCustomers();
  }


  handleGetCustomers() {
    this.customers$ = this.customerService.getCustomers().pipe(
      catchError(err => {
        this.errorMessage = err;
        return throwError(err);  // Return an empty array in case of error
      })
    );
  }
    handleSearchCustomers() {
      let keyword = this.searchFormGroup?.value.keyword;
      this.customers$ = this.customerService.searchCustomers(keyword).pipe(
        catchError(err => {
          this.errorMessage = err;
          return throwError(err);  // Return an empty array in case of error
        })
      );

    }

    handleCustomerAccounts(customer: Customer) {
      this.router.navigateByUrl("/customer-accounts/"+customer.id,{state:customer});

    }
    handleDeleteCustomer(customer: Customer) {
      let confirme = confirm("Are Shoured You Want To Delete This Customer ?")
      if(!confirme) return;
      this.customerService.delateCustomers(customer.id).subscribe({
        next : data => {
          this.handleGetCustomers();
        },
        error : err => {
          console.log(err);
        }
      })
    }

}
