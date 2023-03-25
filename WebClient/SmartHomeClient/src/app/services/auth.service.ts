import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserCredentials } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiAddress: string = 'http://localhost:3000/'
  authApiAddress: string = 'api/login'
  constructor(private http: HttpClient) { }

  checkIfUserAuthorized(userData: UserCredentials){
    return this.http.post<boolean>(this.apiAddress+this.authApiAddress, userData);
  }
}