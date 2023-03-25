import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { SmartDevice } from '../models/smart-device';
import { AppconfigService } from './appconfig.service';

@Injectable({
  providedIn: 'root'
})
export class SmartHomeCameraService {

  //public camera: SmartDevice = {id: 1, name: 'MAIN DOOR', state: "ON"};

  constructor(private http: HttpClient, private appConfigService: AppconfigService) { }
  
  getCameraPic(): Observable<SmartDevice>{
    const cameraPath = 'api/camera'
    return this.http.get<SmartDevice>(this.appConfigService.apiBaseUrl+cameraPath)
  }

}
