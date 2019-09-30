import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable()
export class DataService {

  private dataSource = new BehaviorSubject([]);
  currentResumeData = this.dataSource.asObservable();

  constructor() {
  }

  getResumeData(data: any) {
    this.dataSource.next(data);
  }

}
