import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserCredentials } from '../models/user';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm!: FormGroup;
  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router){}
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      user: [""],
      password: [""]
    });
  }
  onSubmit(): void {
    console.log(this.loginForm.value);
    const userData: UserCredentials = this.loginForm.value;
    if(this.checkCredentials(userData)){
        this.authService.checkIfUserAuthorized(userData).subscribe((isAuthorized: boolean) => {
          if(isAuthorized){
            this.router.navigate(['/smart-home'])
          }else{
            alert("Usuario no está registrado como admin")
          }
        })
        // if user is registered go to home control page
    }
    this.loginForm.reset();
  }

  checkCredentials(userData: UserCredentials): boolean{
    if(userData.user == '' || userData.user == null){
      alert("User can not be empty")
      return false
    }
    if(userData.password == '' || userData.password == null){
      alert("Password can not be empty. Please enter a password")
      return false
    }
    return true
  }
}
