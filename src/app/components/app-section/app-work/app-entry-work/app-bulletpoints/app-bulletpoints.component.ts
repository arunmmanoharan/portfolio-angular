import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-bulletpoints',
  templateUrl: './app-bulletpoints.component.html',
  styleUrls: ['./app-bulletpoints.component.scss'],
})

export class AppBulletpointsComponent implements OnInit {

  @Input() points;

  ngOnInit(): void {
  }
}
