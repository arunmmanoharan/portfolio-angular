import {Component, HostListener, OnInit} from '@angular/core';
import {ApiService} from './services/api.service';
import {DataService} from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public lastScrolledHeight = 0;
  public showReactButton = true;
  private buffer = 0;

  resumeData: any = [];

  @HostListener('window:scroll', ['$event']) onScroll(event) {
    const window = event.path[1];

    if (this.ignoredByBuffer()) {
      return;
    }

    const currentScrollHeight = window.scrollY;

    this.showReactButton = currentScrollHeight <= this.lastScrolledHeight;
    this.lastScrolledHeight = currentScrollHeight;
  }

  private ignoredByBuffer(): boolean {
    if (this.buffer < 10) {
      this.buffer += 1;
      return true;
    }
    this.buffer = 0;
    return false;
  }

  constructor(private apiService: ApiService, private dataService: DataService) {
    this.apiService.getResumeData()
      .subscribe((data) => this.dataService.getResumeData(data));
  }

  ngOnInit(): void {
    this.dataService.getResumeData(this.resumeData);
  }
}
