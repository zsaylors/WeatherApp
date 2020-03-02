import { Component, OnInit } from '@angular/core';
import { WeatherDataService } from 'src/app/services/weather-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  lat: String;
  long: String;

  constructor(private svc: WeatherDataService) { }

  ngOnInit() {

    this.svc.generateLatitude(5).subscribe(
      data => { this.lat = data },
      error => { console.log(error) }
    );

    this.svc.generateLongitude(5).subscribe(
      data => { this.long = data },
      error => { console.log(error) }
    );

  }

}
