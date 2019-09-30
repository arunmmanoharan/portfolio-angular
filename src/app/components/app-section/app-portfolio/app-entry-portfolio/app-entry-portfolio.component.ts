import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-entry-portfolio',
  templateUrl: './app-entry-portfolio.component.html',
  styleUrls: ['./app-entry-portfolio.component.scss'],
})

export class AppEntryPortfolioComponent implements OnInit {

  @Input() entry;

  constructor() {
  }

  ngOnInit() {

  }
}
