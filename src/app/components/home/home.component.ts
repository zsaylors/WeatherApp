import { Component, OnInit } from '@angular/core';
import { WeatherDataService } from 'src/app/services/weather-data.service';
import { Weather } from 'src/app/models/weather';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  numberOfLocations: number = 1;
  lat: String[];
  long: String[];
  allWeather: any[] = [];
  newWx: any;
  selected: boolean = false;
  coord: String;
  selectedLocation: any;
  isLocationSelected: boolean = false;

  constructor(private svc: WeatherDataService) { }

  ngOnInit() {

  }

  getRandomLocations(num: number) {
    this.allWeather = [];
    this.numberOfLocations = num;
    this.selected = true;
  
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
        data => { console.log(data),
          
          this.newWx = data
          this.coord = "[" + this.newWx.lat + ", " + this.newWx.long + "]";
          this.allWeather.push(this.newWx)
          
          this.isLocationSelected = true;
          this.selectedLocation = this.allWeather[0];
        
        
        },
        error => { console.error(error) }
      );
    }
  }

  selectedWx(wx: any) {
    this.isLocationSelected = true;
    this.selectedLocation = wx;
  }

}
