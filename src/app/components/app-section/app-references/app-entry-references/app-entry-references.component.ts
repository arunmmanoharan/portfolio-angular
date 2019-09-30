import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-entry-references',
  templateUrl: './app-entry-references.component.html',
  styleUrls: ['./app-entry-references.component.scss'],
})

export class AppEntryReferencesComponent implements OnInit {

  @Input() entry;

  constructor() {
  }

  ngOnInit() {

  }
}
