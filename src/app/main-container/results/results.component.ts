import { Component, OnInit, EventEmitter } from '@angular/core';
import { Activities } from './swiper/activity/activities.model';
import { TripAssistantService } from '../../services/tripassistant.service';
import { SpeechRecogniserService } from 'src/app/services/speech-recogniser.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})

export class ResultsComponent implements OnInit {
  activities: Activities[];
  hotels: {}[];
  listenSpeechType: string = 'attractions';
  lsitenSpeechTypeChanged = new EventEmitter<string>();

  constructor(
    private activityService: TripAssistantService,
    private speechRecogniser: SpeechRecogniserService
  ) { }

  ngOnInit() {
    this.activities = this.activityService.getActivities();
    this.hotels = this.activityService.getHotels();
  }

  isHotelsAvailable() {
    return this.hotels.length !== 0;
  }

  isActivityAvailable(list) {
    return list.length !== 0;
  }

  onChangeListenSpeechType(listenSpeechType: string) {
    this.listenSpeechType = listenSpeechType;
    this.lsitenSpeechTypeChanged.emit(listenSpeechType);
  }

  getType(type: string): string {
    switch(type) {
      case 'activity':
        return 'Activities';
      case 'attractions':
        return 'Attractions';
      case 'adventures':
        return 'Adventures';
      case 'amusement_park':
        return 'Amusement Parks';
      case 'aquarium':
        return 'Aquariums';
      case 'art_gallery':
        return 'Art Galleries';
      case 'church':
        return 'Churches';
      case 'hindu_temple':
        return 'Hindu Temples';
      case 'mosque':
        return 'Mosques';
      case 'museum':
        return 'Museums';
      case 'natural_feature':
        return 'Natural Features';
      case 'park':
        return 'Parks';
      case 'shopping_mall':
        return 'Shopping Malls';
      case 'zoo':
        return 'Zoo';
      default:
        return type;
    }
  }

}