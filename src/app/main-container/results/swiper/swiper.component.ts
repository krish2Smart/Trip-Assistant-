import { Component, OnInit, Input, EventEmitter } from '@angular/core';

import { Activity } from './activity/activity.model';

@Component({
  selector: 'app-swiper',
  templateUrl: './swiper.component.html',
  styleUrls: ['./swiper.component.css']
})
export class SwiperComponent implements OnInit {
  @Input() items : any;
  @Input() speechActionCommand: string;
  @Input() listenSpeechTypeChanged: EventEmitter<string>;
  @Input() type: string;
  selectedItem: any;
  isSpeechActionCommand: boolean = false;
  

  constructor() { }

  ngOnInit() {
    if(this.listenSpeechTypeChanged !== undefined)
      this.listenSpeechTypeChanged
        .subscribe(
          (speechActionCommand) => this.isSpeechActionCommand = speechActionCommand.toLowerCase() === this.speechActionCommand.toLowerCase()
        )
  }

  onSelectItem(item: any) {
    this.selectedItem = item;
  }
  
  isActivity(): boolean {
    console.log(this.type)
    return this.type !== undefined;
  }

  onCloseItem() {
    this.selectedItem = null;
  }

  getRandomImg(): Number {
    return Math.floor(Math.random() * 5) + 1;
  }

}