import { Component } from '@angular/core';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public res: any;
  public cityName: string = 'London'; // Set London as the default city

  constructor(
    private weatherApI: WeatherService
  ) {}

  ngOnInit(){ 
    this.getWeatherData(); // Get weather data for default city when component initializes
  }

  getWeatherData() {
    // This check will prevent making API call with empty city name
    if(this.cityName){
      this.weatherApI.getWeatherData(this.cityName).subscribe((Response) => {
        this.res = Response;
        console.log(this.res);
      }, error => {
        console.log("Error", error); // Print error if API call fails
      });
    } else {
      console.log("Please enter a city name.");
    }
  }  

}
