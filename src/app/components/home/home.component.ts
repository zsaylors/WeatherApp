import { Component, OnInit } from '@angular/core';
import { WeatherDataService } from 'src/app/services/weather-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  numberOfLocations: number;
  lat: String[];
  long: String[];

  constructor(private svc: WeatherDataService) { }

  ngOnInit() {

    this.svc.generateLatitude(5).subscribe(
      data => { this.lat = data.split('\n') },
      error => { console.log(error) }
    );

    this.svc.generateLongitude(5).subscribe(
      data => { this.long = data.split('\n') },
      error => { console.log(error) }
    );

  }

  getWeather() {
    for(let i = 0; i < this.lat.length - 1; i++) {
      this.svc.getWeatherData(this.lat[i], this.long[i]).subscribe(
        data => { console.log(data) },
        error => { console.error(error) }
      );
    }
  }

}
