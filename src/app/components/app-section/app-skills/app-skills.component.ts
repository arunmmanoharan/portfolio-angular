import {Component, OnInit} from '@angular/core';
import {DataService} from '../../../services/data.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-skills',
  templateUrl: './app-skills.component.html',
  styleUrls: ['./app-skills.component.scss'],
})

export class AppSkillsComponent implements OnInit {

  skillsData = {};

  programmingSummary = [
    'Worked primarily with JavaScript and its related frameworks like React.js, Angular, AngularJS and Node.js',
    'Interested in functional programming and serverless architectures, exploring with new JavaScript frameworks respectively.'
  ];

  programmingSkills: any = {};

  filterSkills = (input, filter) => {
    const reduced = _.reduce(input, (previousValue, currentValue) => {
      return {
        output: currentValue.keywords.indexOf(filter) === -1 ? previousValue.output : previousValue.output.concat(currentValue),
        filter
      };
    }, {
      output: [],
      filter
    });
    return reduced.output;
  };

  constructor(private dataService: DataService) {
  }

  ngOnInit() {
    this.dataService.currentResumeData.subscribe(data => {
      this.skillsData = (data as any) && (data as any).skills;
      this.programmingSkills = this.filterSkills(this.skillsData, 'programming');
    });
  }
}
