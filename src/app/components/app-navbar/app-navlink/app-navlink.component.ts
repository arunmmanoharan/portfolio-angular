import {Component, Input} from '@angular/core';
import {startsWith} from 'lodash';

@Component({
  selector: 'app-navlink',
  templateUrl: './app-navlink.component.html',
  styleUrls: ['./app-navlink.component.scss']
})
export class AppNavlinkComponent {
  @Input() link;
  @Input() name;

  navigateURL(url) {
    return startsWith(url, 'http') ? url : `#${url}`;
  }

  constructor() {
  }
}
