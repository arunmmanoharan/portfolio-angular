import {Component, Input, OnInit} from '@angular/core';
import Datetime from '../../../../constants/dateTime';

@Component({
  selector: 'app-entry-education',
  templateUrl: './app-entry-education.component.html',
  styleUrls: ['./app-entry-education.component.scss'],
})

export class AppEntryEducationComponent implements OnInit {

  @Input() entry;

  startDate = '';
  endDate = '';

  constructor() {
  }

  ngOnInit() {
    this.startDate = Datetime.getDisplayFromDate(this.entry.startDate);
    this.endDate = Datetime.getDisplayFromDate(this.entry.endDate);
  }
}
