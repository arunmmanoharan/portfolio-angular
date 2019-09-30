import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-skill',
  templateUrl: './app-skill.component.html',
  styleUrls: ['./app-skill.component.scss'],
})

export class AppSkillComponent implements OnInit {

  @Input() content;
  @Input() summary;
  @Input() title;

  constructor() {
  }

  ngOnInit() {

  }
}
