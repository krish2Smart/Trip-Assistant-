import { Component, OnInit } from '@angular/core';

import { ChatsService } from 'src/app/services/chats.service';
import { TripAssistantService } from 'src/app/services/tripassistant.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  chats: {
    sender: string,
    message: string
  }[] = [];
  type: string;
  request: string;
  response: string;
  responseQuery: string;
  
  constructor( 
    private chatsServices: ChatsService, 
    public tripassistantServices: TripAssistantService
  ) { }

  ngOnInit() {
    this.chats = this.chatsServices.chats;
    this.type = this.tripassistantServices.getType();
    this.request = this.tripassistantServices.getRequest();
    this.response = this.tripassistantServices.getResponse();
    this.responseQuery = this.tripassistantServices.getResponseQuery();
  }

}
