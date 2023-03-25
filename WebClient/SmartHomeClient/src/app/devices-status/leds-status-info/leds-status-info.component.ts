import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-leds-status-info',
  templateUrl: './leds-status-info.component.html',
  styleUrls: ['./leds-status-info.component.scss']
})
export class LedsStatusInfoComponent {

  @Input('name') ledName!: string;
  @Input('state') isLedOn: boolean = false;
}
