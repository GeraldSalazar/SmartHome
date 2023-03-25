import { Component } from '@angular/core';
import { SmartHomeDoorService } from '../services/smart-home-door.service';
import { SmartHomeLightService } from '../services/smart-home-light.service';

@Component({
  selector: 'app-devices-status',
  templateUrl: './devices-status.component.html',
  styleUrls: ['./devices-status.component.scss']
})
export class DevicesStatusComponent {

  constructor(public lightService: SmartHomeLightService, public doorService: SmartHomeDoorService){
  }
}
