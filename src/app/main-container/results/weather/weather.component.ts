import { Component, OnInit } from '@angular/core';
import { TripAssistantService } from 'src/app/services/tripassistant.service';
import { HttpClient } from '@angular/common/http';
import { TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  response: any;
  city: string;
  date: Date = new Date();
  weather: {
    temperature: string,
    wind: number,
    humidity: number,
    description: string,
    icon: string
  }

  constructor(
    private activityService: TripAssistantService,
    private http: HttpClient,
    public titlecasePipe: TitleCasePipe
  ) { }

  ngOnInit() {
    this.city = this.activityService.getCity();
    let observe = this.http.get('http://api.openweathermap.org/data/2.5/weather?q='+this.city+'&appid=a0b99798362164e1eac216fe4ef534f1'); 
    observe.subscribe((response: Response) => {
      this.response = response;
      this.weather = {
        temperature: (this.response.main.temp-273.15).toFixed(2),
        wind: this.response.wind.speed,
        humidity: this.response.main.humidity,
        description: this.response.weather[0].description,
        icon: 'http://openweathermap.org/img/w/'+this.response.weather[0].icon+'.png'
      };
    });
  }

  convertTitlecasePipe(text: string): string {
    return this.titlecasePipe.transform(text);
  }

}
