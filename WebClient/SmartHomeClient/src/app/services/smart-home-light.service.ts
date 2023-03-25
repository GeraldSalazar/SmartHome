import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { SmartDevice } from '../models/smart-device';
import { AppconfigService } from './appconfig.service';

@Injectable({
  providedIn: 'root'
})
export class SmartHomeLightService {

    public leds: SmartDevice[] = [
    {id: 1, name: 'ROOM1', type: "LED",state: false},
    {id: 2, name: 'ROOM2', type: "LED", state: false},
    {id: 3, name: 'LIVING ROOM',type: "LED", state: false},
    {id: 4, name: 'KITCHEN', type: "LED", state: false},
    {id: 5, name: 'BATHROOM', type: "LED", state: false},
  ]

  constructor(private http: HttpClient, private appConfigService: AppconfigService) { }
  
  getStateAllLights(): Observable<SmartDevice[]>{
    const lightsPath = 'api/lights'
    return this.http.get<SmartDevice[]>(this.appConfigService.apiBaseUrl+lightsPath)
  }

  getLightState(id: number): Observable<SmartDevice>{
    const lightPath = 'api/light'
    const options = { params: new HttpParams().set('id', id) }; //'https://localhost:3000/api/light?id'
    return this.http.get<SmartDevice>(this.appConfigService.apiBaseUrl+lightPath, options)
  }

  changeLightState(id: number): Observable<boolean>{
    const lightPath = 'api/light'
    const options = { params: new HttpParams().set('id', id) }; //'https://localhost:3000/api/light?id'
    console.log(lightPath)
    return this.http.post<boolean>(this.appConfigService.apiBaseUrl+lightPath, {}, options)
  }

  switchLED(ledID: number){
    this.leds.forEach(led => {
      if(led.id == ledID){
        led.state = !led.state
      }
    });
  }
  
}
