import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AccountDetails } from '../models/account.model';

@Injectable({
  providedIn: 'root'
})

export class AccountsService {

  constructor(private http:HttpClient) { }

  public getAccounts(accountId: string, page: string, size: number): Observable<AccountDetails> {
    return this.http.get<AccountDetails>(
      environment.backendHost + "/accounts/" + accountId + "/pageOperations?page=" + page + "&size=" + size
    );
  }


  public debit(accountId: string, amount: number, description: string){
    let data = {accountId,amount,description}
    return this.http.post(environment.backendHost + "/accounts/debit", data)
  }


  public credit(accountId : string, amount : number, description:string){
    let data={accountId : accountId, amount : amount, description : description}
    return this.http.post(environment.backendHost+"/accounts/credit",data);
  }

  public transfer(accountSource: string, accountDestination: string, amount: number, description: string){
    let data = {accountSource,accountDestination,amount,description}
    return this.http.post(environment.backendHost + "/accounts/transfer", data);
  }

}
