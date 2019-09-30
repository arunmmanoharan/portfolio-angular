import {Component, OnInit} from '@angular/core';
import navigation from '../../constants/constants';
import * as _ from 'lodash';

@Component({
  selector: 'app-navbar',
  templateUrl: './app-navbar.component.html',
  styleUrls: ['./app-navbar.component.scss']
})
export class AppNavbarComponent implements OnInit {

  navigation: any;

  ngOnInit() {
    this.navigation = _.map(_.keys(navigation), (link) => {
        const name = navigation[link];
        return {
          link,
          name
        };
      }
    );
  }
}
