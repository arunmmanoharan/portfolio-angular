import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-entry-skill',
  templateUrl: './app-entry-skill.component.html',
  styleUrls: ['./app-entry-skill.component.scss'],
})

export class AppEntrySkillComponent implements OnInit {

  @Input() entry;

  style = {};

  handleMouseEnter(e) {
    this.style = {
      backgroundColor: '#157DEC',
      cursor: 'pointer'
    };
  }

  handleMouseLeave() {
    this.style = {
      backgroundColor: '#313131',
      cursor: 'pointer'
    };
  }

  constructor() {
  }

  ngOnInit() {

  }
}
