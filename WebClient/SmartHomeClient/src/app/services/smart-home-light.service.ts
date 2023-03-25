import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { SmartDevice } from '../models/smart-device';

@Injectable({
  providedIn: 'root'
})
export class SmartHomeLightService {

    public leds: any[] = [
    {id: 1, name: 'ROOM1', state: true},
    {id: 2, name: 'ROOM2', state: false},
    {id: 3, name: 'LIVING ROOM', state: false},
    {id: 4, name: 'KITCHEN', state: false},
    {id: 5, name: 'BATHROOM', state: false},
  ]

  apiAddress: string = 'http://localhost:3000/'

  constructor(private http: HttpClient) { }
  
  getStateAllLights(): Observable<SmartDevice[]>{
    const lightsPath = 'api/lights'
    return this.http.get<SmartDevice[]>(this.apiAddress+lightsPath)
  }

  getLightState(id: number): Observable<SmartDevice>{
    const lightPath = 'api/light'
    const options = { params: new HttpParams().set('id', id) }; //'https://localhost:3000/api/light?id'
    return this.http.get<SmartDevice>(this.apiAddress+lightPath, options)
  }

  changeLightState(id: number): Observable<boolean>{
    const lightPath = 'api/light'
    const options = { params: new HttpParams().set('id', id) }; //'https://localhost:3000/api/light?id'
    return this.http.post<boolean>(this.apiAddress+lightPath, {}, options)
  }

  switchLED(ledID: number){
    this.leds.forEach(led => {
      if(led.id == ledID){
        led.state = !led.state
      }
    });
  }
  
}
