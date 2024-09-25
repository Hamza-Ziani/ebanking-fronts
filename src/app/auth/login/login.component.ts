import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;


  constructor(
    private fb : FormBuilder,
    private authService : AuthService,
    private router : Router
  ) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username : this.fb.control(''),
      password : this.fb.control('')
    })
  }


  login(){
    // console.log(this.loginForm.value);
    this.authService.login(this.loginForm.value.username, this.loginForm.value.password).subscribe({
      next : (data)=>{
        console.log(data);
        this.authService.loadProfile(data);
        this.router.navigateByUrl("/dashboard")
      },error : (err)=>{
        console.log(err);
      }
    })
  }

}
