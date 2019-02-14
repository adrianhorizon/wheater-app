import { Component, OnInit } from '@angular/core';
import { weatherClass } from '../shared/interfaces/weather.interface';

@Component({
  selector: 'weather-detail',
  templateUrl: './weather-detail.component.html',
  styleUrls: ['./weather-detail.component.scss']
})
export class WeatherDetailComponent extends weatherClass implements OnInit {

  ngOnInit() {
    this.getWeathersId();
  }

}
