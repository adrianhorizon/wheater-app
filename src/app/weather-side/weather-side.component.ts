import { Component, OnInit, Input } from '@angular/core';
import { Weather } from '../shared/models/weather.model';
import { weatherClass } from '../shared/interfaces/weather.interface';

@Component({
  selector: 'weather-side',
  templateUrl: './weather-side.component.html',
  styleUrls: ['./weather-side.component.scss']
})
export class WeatherSideComponent implements OnInit {

  @Input("weather") weather: Weather;
  constructor() { }

  ngOnInit() {
  }

}
