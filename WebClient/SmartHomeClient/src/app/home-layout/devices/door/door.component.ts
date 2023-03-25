import { Component, Input } from '@angular/core';
import { SmartHomeDoorService } from 'src/app/services/smart-home-door.service';

@Component({
  selector: 'app-door',
  templateUrl: './door.component.html',
  styleUrls: ['./door.component.scss']
})
export class DoorComponent {
  constructor(private doorService: SmartHomeDoorService){}
  @Input('id') ledID!: number;

  switchDoor(){
    this.doorService.switchDoor(this.ledID)
  }
}
