import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-navlink',
  templateUrl: './app-navlink.component.html',
  styleUrls: ['./app-navlink.component.scss']
})
export class AppNavlinkComponent {
  @Input() link;
  @Input() name;

  constructor() {
  }
}
