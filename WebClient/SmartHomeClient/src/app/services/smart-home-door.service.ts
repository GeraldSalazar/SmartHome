import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { SmartDevice } from '../models/smart-device';
import { AppconfigService } from './appconfig.service';

@Injectable({
  providedIn: 'root'
})
export class SmartHomeDoorService{

  public doors: SmartDevice[] = [
    {id: 1, name: 'MAIN DOOR', type: 'DOOR',state: false},
    {id: 2, name: 'DOOR ROOM 1', type: 'DOOR', state: false},
    {id: 3, name: 'DOOR ROOM 2', type: 'DOOR', state: false},
    {id: 4, name: 'BACK DOOR', type: 'DOOR', state: false},
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

  updateDoors(doors: SmartDevice[]){
    this.doors = doors
  }

  switchDoor(doorID: number){
    this.doors.forEach(door => {
      if(door.id == doorID){
        door.state = !door.state
      }
    });
  }

}
