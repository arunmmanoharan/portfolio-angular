import {Component, OnInit} from '@angular/core';
import {DataService} from '../../../services/data.service';

@Component({
  selector: 'app-references',
  templateUrl: './app-references.component.html',
  styleUrls: ['./app-references.component.scss'],
})

export class AppReferencesComponent implements OnInit {

  referencesData = {};

  carouselOptions = {
    margin: 25,
    nav: true,
    navText: ['<div class=\'nav-btn prev-slide\'></div>', '<div class=\'nav-btn next-slide\'></div>'],
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: true
      },
      600: {
        items: 1,
        nav: true
      },
      1000: {
        items: 2,
        nav: true,
        loop: false
      },
      1500: {
        items: 3,
        nav: true,
        loop: false
      }
    }
  };

  constructor(private dataService: DataService) {
  }

  ngOnInit() {
    this.dataService.currentResumeData.subscribe(data => {
      this.referencesData = (data as any) && (data as any).references;
    });
  }
}
