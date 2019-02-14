import { Component, OnInit } from '@angular/core';
import { weatherClass } from '../shared/interfaces/weather.interface';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent extends weatherClass implements OnInit {

  ngOnInit() {
    this.getWeathers();
  }

}
