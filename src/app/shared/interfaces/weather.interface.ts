import { Injectable } from '@angular/core';
import { WeatherService } from '../services/weather.service';
import { Weather } from '../models/weather.model';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class weatherClass {
    weathers: Weather[];
    weather: Weather;
    forest: Weather;
    sub: any;
    
    constructor(
      private weatherService: WeatherService,
      private route: ActivatedRoute
      ) { }

    getWeathers() {
      this.weatherService
      .getWeather()
        .subscribe(
            (data: Weather[])  => this.weathers = data
        )
    }

    getWeathersId() {
      this.sub = this.route.params.subscribe(params => { 
        this.weatherService
        .getWeatherId(params.id)
        .subscribe(
          (data: Weather) => this.weather = data
        );
      });
      
    }

    showWeather(id) {
      this.weatherService
      .getWeatherId(id)
        .subscribe(
          (data: Weather) => this.weather = data
        );
    }
  
    submitWeather(event) {
      event.preventDefault()
      const form = new FormData(event.target)
      const id = form.get('id')
      this.showWeather(id)
    }
}