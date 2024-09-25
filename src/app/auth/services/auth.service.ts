import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isAuthenticate :boolean = false;
  roles :any;
  username :any;
  accessToken :any;

  constructor(
    private http:HttpClient,
    private router :Router
  ) { }


  login(username:string, password:string){
    let options = {
      headers: new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'})
    }
    let params = new HttpParams().set('username',username).set('password',password);
    return this.http.post(environment.backendHost+"/auth/login", params, options);
  }

  loadProfile(data:any){
    this.isAuthenticate = true;
    this.accessToken = data['access_token'];
    let jwtDecoder:any =  jwtDecode(this.accessToken);
    this.roles = jwtDecoder.scope;
    this.username = jwtDecoder.sub;
    window.localStorage.setItem('jwt_token', this.accessToken);
  }


  loadJwtTokenFormLocalStorage(){
    let token = window.localStorage.getItem('jwt_token');
    if(token){
      this.loadProfile({
        access_token : token
      });
      this.router.navigateByUrl("/dashboard/customers");
    }
  }
  logout(){
    this.isAuthenticate = false;
    this.accessToken = null;
    this.roles = null;
    this.username = null;
    this.router.navigateByUrl("/login");
  }

}
