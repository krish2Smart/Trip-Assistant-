import { Component, OnInit, Input, EventEmitter } from '@angular/core';

import { Activity } from './activity/activity.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-swiper',
  templateUrl: './swiper.component.html',
  styleUrls: ['./swiper.component.css']
})
export class SwiperComponent implements OnInit {
  @Input() items : any;
  @Input() speechActionCommand: string;
  @Input() listenSpeechTypeChanged: EventEmitter<string>;
  selectedItem: any;
  isSpeechActionCommand: boolean = false;
  response: any;
  date: Date;
  weather: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    if(this.listenSpeechTypeChanged !== undefined)
      this.listenSpeechTypeChanged
        .subscribe(
          (speechActionCommand) => this.isSpeechActionCommand = speechActionCommand.toLowerCase() === this.speechActionCommand.toLowerCase()
        )
  }

  onSelectItem(item: any) {
    let observable = this.http.get('http://172.16.14.35:50175/api/PlaceDetails?placeId='+item.placeId); 
    observable.subscribe((response: Response) => {
      this.response = response;
      item.address = this.response.address;
      item.website = this.response.website;
      item.phone = this.response.phone;
      this.date = new Date();
      item.openingHours = this.response.openingHours;
      if(item.address == null) {
        item.address = 'India';
      }
      if(item.phone == null) {
        item.phone = 9232038456;
      }
      if(item.openingHours == null) {
        item.openingHours = [
          "Monday: 10:00 AM – 8:00 PM",
          "Tuesday: 10:00 AM – 8:00 PM",
          "Wednesday: 10:00 AM – 8:00 PM",
          "Thursday: 10:00 AM – 8:00 PM",
          "Friday: 10:00 AM – 8:00 PM",
          "Saturday: 10:00 AM – 8:00 PM",
          "Sunday: 10:00 AM – 8:00 PM"
        ];
      }
      item.currentOpening = item.openingHours[this.date.getDay()-1];
    })
    let observe = this.http.get('http://api.openweathermap.org/data/2.5/weather?lat='+item.lattitude+'&lon='+item.longitude+'&appid=a0b99798362164e1eac216fe4ef534f1'); 
    observe.subscribe((response: Response) => {
      this.response = response;
      item.weather = {
        temperature: (this.response.main.temp-273.15).toFixed(2),
        wind: this.response.wind.speed,
        humidity: this.response.main.humidity,
        description: this.response.weather[0].description,
        icon: 'http://openweathermap.org/img/w/'+this.response.weather[0].icon+'.png'
      };
      console.log("hellooo",item.weather);
    });
    this.selectedItem = item;
  }
  
  isActivity(): boolean {
    return this.selectedItem instanceof Activity;
  }

  onCloseItem() {
    this.selectedItem = null;
  }

  getRandomImg(): Number {
    return Math.floor(Math.random() * 5) + 1;
  }

}