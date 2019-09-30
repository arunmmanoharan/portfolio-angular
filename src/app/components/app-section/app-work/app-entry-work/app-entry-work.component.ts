import {Component, Input, OnInit} from '@angular/core';
import Datetime from '../../../../constants/dateTime';

@Component({
  selector: 'app-entry-work',
  templateUrl: './app-entry-work.component.html',
  styleUrls: ['./app-entry-work.component.scss'],
})

export class AppEntryWorkComponent implements OnInit {

  @Input() index;
  @Input() total;
  @Input() entry;

  startDate = '';
  endDate = '';
  indexProperty = '';

  constructor() {
  }

  ngOnInit() {
    this.startDate = Datetime.getDisplayFromDate(this.entry.startDate);
    this.endDate = Datetime.getDisplayFromDate(this.entry.endDate);
    this.indexProperty = this.index + 1;
  }
}
