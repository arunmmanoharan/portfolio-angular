import {Component, OnInit} from '@angular/core';
import {DataService} from '../../services/data.service';

@Component({
  selector: 'app-banner',
  templateUrl: './app-banner.component.html',
  styleUrls: ['./app-banner.component.scss'],
})
export class AppBannerComponent implements OnInit {

  name = '';

  style: object;

  constructor(private dataService: DataService) {
  }

  handleMouseEnter(e) {
    this.style = {
      color: '#157DEC',
      cursor: 'pointer'
    };
  }

  handleMouseLeave() {
    this.style = {
      color: '#FFFFFF',
      cursor: 'pointer'
    };
  }

  ngOnInit() {
    this.dataService.currentResumeData.subscribe(data => {
      this.name = (data as any).basics && (data as any).basics.name;
    });
  }
}
