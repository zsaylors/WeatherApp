import { Component, OnInit } from '@angular/core';
import { WeatherDataService } from 'src/app/services/weather-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  numberOfLocations: number = 1;
  lat: String[];
  long: String[];

  constructor(private svc: WeatherDataService) { }

  ngOnInit() {

  }

  getRandomLocations(num: number) {
    this.numberOfLocations = num;

    this.svc.generateLatitude(this.numberOfLocations).subscribe(
      data => { this.lat = data.split('\n'),
        this.svc.generateLongitude(this.numberOfLocations).subscribe(
         data => { this.long = data.split('\n'),
          this.getWeather() },
          error => { console.log(error) }
        );
    },
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
