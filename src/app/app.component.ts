import {Component, OnInit} from '@angular/core';
import {ApiService} from './services/api.service';
import {DataService} from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  resumeData: any = [];

  constructor(private apiService: ApiService, private dataService: DataService) {
    this.apiService.getResumeData()
      .subscribe((data) => this.dataService.getResumeData(data));
  }

  ngOnInit(): void {
    this.dataService.getResumeData(this.resumeData);
  }
}
