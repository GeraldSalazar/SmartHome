import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-doors-status-info',
  templateUrl: './doors-status-info.component.html',
  styleUrls: ['./doors-status-info.component.scss']
})
export class DoorsStatusInfoComponent {

  @Input('name') doorName!: string;
  @Input('state') isDoorOpen: boolean = false;
}
