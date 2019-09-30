import {Component, OnInit} from '@angular/core';
import {DataService} from '../../../services/data.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './app-portfolio.component.html',
  styleUrls: ['./app-portfolio.component.scss'],
})

export class AppPortfolioComponent implements OnInit {

  portfolioData = {};

  constructor(private dataService: DataService) {
  }

  ngOnInit() {
    this.dataService.currentResumeData.subscribe(data => {
      this.portfolioData = (data as any) && (data as any).publications;
    });
  }
}
