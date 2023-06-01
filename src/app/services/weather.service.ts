import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(
    private http: HttpClient,
  ) { }
  getWeatherData(cityName: string): Observable<any> {
    let apiKey = 'eb26b797caee6aecdde6e79d438cefd1';
    let query = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;
    return this.http.get(query);
  }
  
}
