import { Component, OnInit, Input, Output, EventEmitter, ElementRef } from '@angular/core';
import { Activity } from './activity.model';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css']
})
export class ActivityComponent implements OnInit {
  @Input('selectedItem') activity: Activity;
  @Input('type') type: string;
  @Output() onCloseItem = new EventEmitter();
  response: any;
  date: Date;
  userdetails : {
    UserName: string,
    Type: string
  };

  constructor(private activityElement: ElementRef, private http: HttpClient) { }

  ngOnInit() {
    let observable = this.http.get('http://172.16.14.35:50175/api/PlaceDetails?placeId='+this.activity.placeId); 
    observable.subscribe((response: Response) => {
      this.response = response;
      this.activity.address = this.response.address;
      this.activity.website = this.response.website;
      this.activity.phone = this.response.phone;
      this.date = new Date();
      this.activity.openingHours = this.response.openingHours;
      if(this.activity.address == null)
        this.activity.address = 'India';
      if(this.activity.phone == null)
        this.activity.phone = 9232038456;
      if(this.activity.openingHours == null) {
        this.activity.openingHours = [
          "Monday: 10:00 AM – 8:00 PM",
          "Tuesday: 10:00 AM – 8:00 PM",
          "Wednesday: 10:00 AM – 8:00 PM",
          "Thursday: 10:00 AM – 8:00 PM",
          "Friday: 10:00 AM – 8:00 PM",
          "Saturday: 10:00 AM – 8:00 PM",
          "Sunday: 10:00 AM – 8:00 PM"
        ];
      }
      this.activity.currentOpening = this.activity.openingHours[this.date.getDay()-1];
    })
    this.userdetails = {
      UserName: 'Mohit',
      Type: this.type
    };
    console.log('check',this.userdetails);
    this.http.post('http://tripassistant-user.ap-south-1.elasticbeanstalk.com/api/PastExperience',this.userdetails);
    this.activityElement.nativeElement.scrollIntoView({ behavior: "smooth", block: "start" });
  }
  
  close() {
    this.onCloseItem.emit();
  }

}