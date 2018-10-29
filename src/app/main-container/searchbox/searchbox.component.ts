import { Component, OnInit } from '@angular/core';
import { ChatsService } from '../chats.service';
import { HttpClient } from '@angular/common/http';
import { TripAssistantService } from '../../services/tripassistant.service';

@Component({
  selector: 'app-searchbox',
  templateUrl: './searchbox.component.html',
  styleUrls: ['./searchbox.component.css'],
  providers: []
})
export class SearchboxComponent implements OnInit {
  //@Input() usermessage:{sent:boolean,context:string};
  input: string = '';
  final: string = '';
  city: string;
  cityResults: any;
  microphone: boolean = window['SpeechRecognition'] !== undefined || window['webkitSpeechRecognition'] !== undefined;
  response: any;
  constructor(private chatsService: ChatsService, private http: HttpClient, private tripassistantService: TripAssistantService) { }

  ngOnInit() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {      
        let observe = this.http.get('https://maps.googleapis.com/maps/api/geocode/json?latlng=' + position.coords.latitude + ',' + position.coords.longitude + '&key=AIzaSyAGsJD6XqB9zheEOUoYFpOCGuPuDlUWhOc');
        observe.subscribe((response)=> {
            this.cityResults = response;
            for ( let indexer1 = 0; indexer1 < this.cityResults.results[1].address_components.length; indexer1++) {
                for ( let indexer2 = 0; indexer2 < this.cityResults.results[1].address_components[indexer1].types.length; indexer2++)
                    if ( this.cityResults.results[1].address_components[indexer1].types[indexer2] == 'locality')
                    this.city = this.cityResults.results[1].address_components[indexer1].long_name;
            }
        });
      });
    }
    else {
      alert("Geolocation is not supported by this browser.");
    }
  }

  onChangeInput(message: string) {
    this.input = message;
    
  }

  check() {
    this.final = this.input;
    this.input = '';
    if(this.final!='')
    {
        this.chatsService.addChat('user', this.final);
        this.tripassistantService.setShowSpinner(true);
        let observable = this.http.get('http://tripassistant-search-engine.ap-south-1.elasticbeanstalk.com/api/SearchResults?input=' + this.tripassistantService.getRequest() + ' ' + this.final + '&location=' + this.city); 
        observable.subscribe((response: Response) => {
            this.tripassistantService.setShowSpinner(false);
            this.response = response;
            this.tripassistantService.setType(this.response.type);
            this.tripassistantService.setResponse(this.response.responseQuery);
            this.tripassistantService.setResponseQuery(this.response.responseQuery);
            this.tripassistantService.setRequest(this.response.request);
            this.tripassistantService.setActivities(this.response.activityList);
            this.tripassistantService.setHotels(this.response.hotelList);
            if( this.tripassistantService.getType() == 'request') {
                this.chatsService.addChat( 'assistant' , this.tripassistantService.getResponse());
            }
        })
    }
  }
}
