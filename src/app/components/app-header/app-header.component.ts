import { Component, OnInit, AfterViewInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss']
})
export class AppHeaderComponent implements OnInit, AfterViewInit {

  @Input() showReactButton;

  window: any;
  style: any;

  constructor() {
    this.window = {
      height: 0,
      width: 0
    };
  }

  ngOnInit() {
    window.addEventListener('resize', this.window);
  }

  ngAfterViewInit() {
    this.style = {
      height: this.window.height
    };
  }

}
