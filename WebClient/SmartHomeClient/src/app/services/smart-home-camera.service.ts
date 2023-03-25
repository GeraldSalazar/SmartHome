import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { SmartDevice } from '../models/smart-device';

@Injectable({
  providedIn: 'root'
})
export class SmartHomeCameraService {

  apiAddress: string = 'http://localhost:3000/'

  constructor(private http: HttpClient) { }
  
  getCameraPic(): Observable<SmartDevice>{
    const cameraPath = 'api/camera'
    return this.http.get<SmartDevice>(this.apiAddress+cameraPath)
  }

}
