import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserCredentials } from '../models/user';
import { AppconfigService } from './appconfig.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService{

  authApiAddress: string = 'api/login'
  constructor(private http: HttpClient, private appConfigService: AppconfigService) { }

  checkIfUserAuthorized(userData: UserCredentials){
    return this.http.post<boolean>(this.appConfigService.apiBaseUrl+this.authApiAddress, userData);
  }
}