import { Component, OnInit } from '@angular/core';
import { ChatsService } from './chats.service';
import { TripAssistantService } from '../services/tripassistant.service';

@Component({
  selector: 'app-main-container',
  templateUrl: './main-container.component.html',
  styleUrls: ['./main-container.component.css'],
  providers: [ChatsService]
})

export class MainContainerComponent implements OnInit {
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
    private tripassistantServices: TripAssistantService
  ) { }

  ngOnInit() {
    this.chats = this.chatsServices.chats;
    this.type = this.tripassistantServices.getType();
    this.request = this.tripassistantServices.getRequest();
    this.response = this.tripassistantServices.getResponse();
    this.responseQuery = this.tripassistantServices.getResponseQuery();
  }
}
