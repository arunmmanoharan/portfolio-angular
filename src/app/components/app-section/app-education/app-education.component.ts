import {Component, OnInit} from '@angular/core';
import {DataService} from '../../../services/data.service';

@Component({
  selector: 'app-education',
  templateUrl: './app-education.component.html',
  styleUrls: ['./app-education.component.scss'],
})

export class AppEducationComponent implements OnInit {

  educationData = {};

  constructor(private dataService: DataService) {
  }

  ngOnInit() {
    this.dataService.currentResumeData.subscribe(data => {
      this.educationData = (data as any) && (data as any).education;
    });
  }
}
