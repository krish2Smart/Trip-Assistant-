import { Component, OnInit, Input } from '@angular/core';
import { Activity } from './activity/activity.model';

@Component({
  selector: 'app-swiper',
  templateUrl: './swiper.component.html',
  styleUrls: ['./swiper.component.css']
})

export class SwiperComponent implements OnInit {
  @Input() items : any;
  selectedItem: any;
  private transcripts: string;

  constructor() { }

  ngOnInit() {
  }

  onSelectItem(item: any) {
    this.selectedItem = item;
  }

  isActivity(): boolean {
    return this.selectedItem instanceof Activity;
  }

}