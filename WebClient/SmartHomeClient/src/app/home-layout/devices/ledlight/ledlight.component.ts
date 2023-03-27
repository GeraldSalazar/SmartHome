import { Component, Input } from '@angular/core';
import { SmartDevice } from 'src/app/models/smart-device';
import { SmartHomeLightService } from 'src/app/services/smart-home-light.service';

@Component({
  selector: 'app-ledlight',
  templateUrl: './ledlight.component.html',
  styleUrls: ['./ledlight.component.scss']
})
export class LEDlightComponent {

  constructor(private lightService: SmartHomeLightService){}
  @Input('id') ledID!: number;

  changeLightState(){
    this.lightService.changeLightState(this.ledID).subscribe((newLights: SmartDevice[]) => {
      this.lightService.updateLights(newLights)
    })
    //this.lightService.switchLED(this.ledID)
  }
}
