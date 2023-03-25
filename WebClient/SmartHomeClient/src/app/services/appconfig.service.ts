import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom, lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppconfigService {

  private appConfig: any;

  constructor(private http: HttpClient) { }

  loadAppConfig() {
    return lastValueFrom(this.http.get('assets/config.json')).then(data => { this.appConfig=data })
  }

  get apiBaseUrl() {
    if (!this.appConfig) {
      throw Error('Config file not loaded!');
    }
    return this.appConfig.apiBaseUrl;
  }
}
