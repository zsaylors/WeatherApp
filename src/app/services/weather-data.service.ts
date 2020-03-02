import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherDataService {

  constructor(private http: HttpClient) { }

  // Returns random coordinates
  generateLongitude(num) {
    return this.http.get('https://www.random.org/integers/?num=' + num + 
                                      '&min=-180&max=180&col=1&base=10&format=plain&rnd=new',  {responseType: 'text'})
  }

  generateLatitude(num) {
    return this.http.get('https://www.random.org/integers/?num=' + num + 
                                      '&min=-90&max=90&col=1&base=10&format=plain&rnd=new', {responseType: 'text'})
  }

  getWeatherData(lat, lon) {
    return this.http.get('https://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + lon + '&appid=de10300ebff83ff66eb7a188c336b7b5')
  }


}
