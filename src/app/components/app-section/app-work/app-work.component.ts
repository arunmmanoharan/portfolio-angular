import {Component, OnInit} from '@angular/core';
import {DataService} from '../../../services/data.service';

@Component({
  selector: 'app-work',
  templateUrl: './app-work.component.html',
  styleUrls: ['./app-work.component.scss'],
})

export class AppWorkComponent implements OnInit {

  workData:any = [];

  constructor(private dataService: DataService) {
  }

  ngOnInit() {
    this.dataService.currentResumeData.subscribe(data => {
      this.workData = (data as any).basics && (data as any).work;
    });
  }
}
