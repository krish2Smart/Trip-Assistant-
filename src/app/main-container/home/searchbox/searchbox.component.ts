import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ChatsService } from '../../../services/chats.service';
import { TripAssistantService } from '../../../services/tripassistant.service';
import { SpeechRecogniserService } from 'src/app/services/speech-recogniser.service';

@Component({
  selector: 'app-searchbox',
  templateUrl: './searchbox.component.html',
  styleUrls: ['./searchbox.component.css'],
  providers: []
})
export class SearchboxComponent implements OnInit {
  input: string = '';
  final: string = '';
  city: string;
  cityResults: any;
  response: any;
  @ViewChild('voiceInput') transcriptsResultElement: ElementRef;

  constructor(
    private chatsService: ChatsService, 
    private http: HttpClient, 
    private tripassistantService: TripAssistantService,
    private SpeechRecogniser: SpeechRecogniserService
  ) { }

  ngOnInit() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {      
        let observe = this.http.get('https://maps.googleapis.com/maps/api/geocode/json?latlng=' + position.coords.latitude + ',' + position.coords.longitude + '&key=AIzaSyA9v-ByUMauD8TazXdViq_f7RF-EHru86A');
        observe.subscribe((response)=> {
            this.cityResults = response;
            for ( let indexer1 = 0; indexer1 < this.cityResults.results[1].address_components.length; indexer1++) {
                for ( let indexer2 = 0; indexer2 < this.cityResults.results[1].address_components[indexer1].types.length; indexer2++)
                    if ( this.cityResults.results[1].address_components[indexer1].types[indexer2] == 'locality')
                      this.city = this.cityResults.results[1].address_components[indexer1].long_name;
            }
            // console.log("city check",this.city);      
        });
      });
    }
    else {
      alert("Geolocation is not supported by this browser.");
    }
  }

  onChangeInput(message: string): void {
    this.transcriptsResultElement.nativeElement.value = message;
    this.input = message;
  }

  getResults(): void {
    this.final = this.input;
    this.input = '';
    if(this.final!='')
    {
        this.chatsService.addChat('user', this.final);
        this.tripassistantService.setShowSpinner(true);
        console.log('http://tripassistant-search-engine.ap-south-1.elasticbeanstalk.com/api/SearchResults?input=' + this.tripassistantService.getRequest() + ' ' + this.final + '&location=' + this.city);
        let observable = this.http.get('http://172.16.14.35:50175/api/SearchResults?input=' + this.tripassistantService.getRequest() + ' ' + this.final + '&location=Pune'); 
        observable.subscribe((response: Response) => {
            this.tripassistantService.setShowSpinner(false);
            this.response = response;
            this.tripassistantService.setType(this.response.type);
            this.tripassistantService.setResponse(this.response.responseQuery);
            this.tripassistantService.setResponseQuery(this.response.responseQuery);
            this.tripassistantService.setRequest(this.response.request);
            this.tripassistantService.setActivities(this.response.activityList);
            this.tripassistantService.setHotels(this.response.hotelList);
            this.tripassistantService.setCity(this.response.city);
            if( this.tripassistantService.getType() == 'request') {
                this.chatsService.addChat( 'assistant' , this.tripassistantService.getResponse());
            }
        })
    }
  }
}
