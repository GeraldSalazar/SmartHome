import { Component } from '@angular/core';

@Component({
  selector: 'app-home-layout',
  templateUrl: './home-layout.component.html',
  styleUrls: ['./home-layout.component.scss']
})
export class HomeLayoutComponent {

  constructor(){}

  // switchLight(ledID: number){
  //   this.ledsService.switchLED(ledID);

  // }

  // switchDoor(doorID: number){
  //   this.doorsService.getMessage().subscribe((info) => {
  //     console.log(info)
  //   })
  //   this.doorsService.switchDoor(doorID);
  // }

  // getLEDState(ledID: number): boolean{
  //   for(let led of this.ledsService.leds){
  //     if(led.id == ledID) return led.state;
  //   }
  //   return false
  // }

}
