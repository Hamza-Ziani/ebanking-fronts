import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Customer } from '../models/customer.model';
@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http:HttpClient) { }

  public getCustomers():Observable<Customer[]>{
    return this.http.get<Customer[]>(environment.backendHost+"/customers")
  }

  public searchCustomers(keyword:string):Observable<Customer[]>{
    return this.http.get<Customer[]>(environment.backendHost+"/customers/search?keyword="+keyword)
  }


  public saveCustomers(customer:Customer):Observable<Customer[]>{
    return this.http.post<Customer[]>(environment.backendHost+"/customers",customer)
  }


  public delateCustomers(id:number){
    return this.http.delete(environment.backendHost+"/customers/"+id)
  }
}
