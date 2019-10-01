import {Component, OnInit, Input} from '@angular/core';
import {DataService} from '../../../services/data.service';

@Component({
  selector: 'app-social-media',
  templateUrl: './app-social-media.component.html',
  styleUrls: ['./app-social-media.component.scss'],
})

export class AppSocialMediaComponent implements OnInit {

  @Input() ulClass;
  profiles = {};

  constructor(private dataService: DataService) {
  }

  ngOnInit() {
    this.dataService.currentResumeData.subscribe(data => {
      this.profiles = (data as any).basics && (data as any).basics.profiles;
    });
  }
}
