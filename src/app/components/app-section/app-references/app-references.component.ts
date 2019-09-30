import {Component, OnInit} from '@angular/core';
import {DataService} from '../../../services/data.service';

@Component({
  selector: 'app-references',
  templateUrl: './app-references.component.html',
  styleUrls: ['./app-references.component.scss'],
})

export class AppReferencesComponent implements OnInit {

  referencesData = {};

  images = [1, 2, 3].map(() => `https://picsum.photos/900/500?random&t=${Math.random()}`);

  constructor(private dataService: DataService) {
  }

  ngOnInit() {
    this.dataService.currentResumeData.subscribe(data => {
      this.referencesData = (data as any) && (data as any).references;
    });
  }
}
