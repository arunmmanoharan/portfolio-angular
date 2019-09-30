import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import API from '../constants/URL_Constants';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) {}

  public getResumeData() {
    return this.httpClient.get(API);
  }
}
