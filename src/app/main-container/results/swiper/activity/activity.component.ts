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
  }
  
  close() {
    this.onCloseItem.emit();
  }

}