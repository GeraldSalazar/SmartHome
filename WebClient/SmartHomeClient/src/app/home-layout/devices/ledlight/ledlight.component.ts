import { Component, Input } from '@angular/core';
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
    this.lightService.changeLightState(this.ledID).subscribe((akw:boolean) => {
      console.log(akw)
    })
    //this.lightService.switchLED(this.ledID)
  }
}
