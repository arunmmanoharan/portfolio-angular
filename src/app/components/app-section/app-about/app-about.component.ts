import {Component, OnInit} from '@angular/core';
import {DataService} from '../../../services/data.service';

@Component({
  selector: 'app-about',
  templateUrl: './app-about.component.html',
  styleUrls: ['./app-about.component.scss'],
})

export class AppAboutComponent implements OnInit {

  basics: any = {};
  summary: any = {};
  name = '';
  location: any = {};

  constructor(private dataService: DataService) {
  }

  ngOnInit() {
    this.dataService.currentResumeData.subscribe(data => {
      this.basics = (data as any).basics && (data as any).basics;
      this.name = (data as any).basics && (data as any).basics.name;
      this.location = (data as any).basics && (data as any).basics.location;
      this.summary = (data as any).basics && (data as any).basics.summary.split('\n');
    });
  }
}
