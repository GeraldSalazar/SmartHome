import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { SmartDevice } from '../models/smart-device';
import { AppconfigService } from './appconfig.service';

@Injectable({
  providedIn: 'root'
})
export class SmartHomeDoorService{

  public doors: any[] = [
    {id: 1, name: 'MAIN DOOR', state: false},
    {id: 2, name: 'DOOR ROOM 1', state: false},
    {id: 3, name: 'DOOR ROOM 2', state: false},
    {id: 4, name: 'BACK DOOR', state: false},
  ]

  constructor(private http: HttpClient, private appConfigService: AppconfigService) { }

  getStateAllDoors(): Observable<SmartDevice[]>{
    const doorsPath = 'api/doors'
    return this.http.get<SmartDevice[]>(this.appConfigService.apiBaseUrl+doorsPath)
  }

  getDoorState(id: number): Observable<SmartDevice>{
    const doorPath = 'api/door'
    const options = { params: new HttpParams().set('id', id) }; //'https://localhost:3000/api/door?id'
    return this.http.get<SmartDevice>(this.appConfigService.apiBaseUrl+doorPath, options)
  }

  switchDoor(doorID: number){
    this.doors.forEach(door => {
      if(door.id == doorID){
        door.state = !door.state
      }
    });
  }

}
