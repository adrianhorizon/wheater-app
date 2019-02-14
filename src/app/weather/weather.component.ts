import { Component, OnInit, Input } from '@angular/core';
import { Weather } from '../shared/models/weather.model';

@Component({
  selector: 'weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {

  @Input("weather") weather: Weather;
  constructor() { }

  ngOnInit() {
  }

}
