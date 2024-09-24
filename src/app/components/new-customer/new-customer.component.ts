import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomerService } from '../services/customer.service';
import { catchError, Observable, throwError } from 'rxjs';
import { Customer } from '../models/customer.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-customer',
  templateUrl: './new-customer.component.html',
  styleUrls: ['./new-customer.component.css']
})
export class NewCustomerComponent implements OnInit {
newCustomerFormGroup!: FormGroup;
customers$!: Observable<Customer[]>;
errorMessage! : string;
  constructor(
    private customerService:CustomerService,
    private fb : FormBuilder,
    private router :Router
  ) { }

  ngOnInit(): void {
    this.newCustomerFormGroup = this.fb.group({
      name : this.fb.control("",Validators.required),
      email : this.fb.control("",Validators.required)
    })
  }

  handleSaveCustomer() {
    let customer = this.newCustomerFormGroup.value;
    this.customerService.saveCustomers(customer).subscribe({
      next : data => {
        alert("Customer added successfully");
         this.router.navigateByUrl("/customers")
      },
      error : err => {
        console.log(err);
      }
    })
  }

}
