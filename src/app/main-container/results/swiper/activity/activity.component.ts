import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Activity } from './activity.model';


@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css']
})
export class ActivityComponent implements OnInit {
  @Input('selectedItem') activity: Activity;
  @Output() onCloseItem = new EventEmitter();

  constructor() { }

  ngOnInit() {
    if(this.activity.address == null) {
      this.activity.address = 'India';
    }
    if(this.activity.phone == null) {
      this.activity.phone = 9232038456;
    }
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
  }
  
  close() {
    this.onCloseItem.emit();
  }

}