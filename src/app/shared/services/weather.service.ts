import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { catchError } from 'rxjs/operators';
import { Weather } from '../models/weather.model';

@Injectable({
  providedIn: 'root'
})

export class WeatherService {
  weatherApi: any;
  weatherApiId: any;
  apiSearch: string = environment.groupApi;
  keyApi: string = environment.keyApi;
  
  constructor(private http: HttpClient) {
    this.weatherApi = environment.weatherApi + this.apiSearch;
    this.weatherApiId = environment.weatherApi;
   }

   getWeather(): Observable<Weather[]> {
    return this.http.get<Weather[]>(`${this.weatherApi}${this.keyApi}`)
    .pipe(
      catchError(this.handleError)
    )
   }

   getWeatherId(id): Observable<Weather> {
    return this.http.get<Weather>(`${this.weatherApiId}weather?q=${id}&units=imperial&${this.keyApi}`)
    .pipe(
      catchError(this.handleError)
    );
   }

   private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError(
      'Something bad happened; please try again later.');
  }

}
