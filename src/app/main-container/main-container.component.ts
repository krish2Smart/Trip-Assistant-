import { Component, OnInit } from '@angular/core';
import { ChatsService } from '../services/chats.service';
import { TripAssistantService } from '../services/tripassistant.service';

@Component({
  selector: 'app-main-container',
  templateUrl: './main-container.component.html',
  styleUrls: ['./main-container.component.css'],
  providers: [ChatsService]
})

export class MainContainerComponent implements OnInit {
  
  constructor( 
    private chatsServices: ChatsService, 
    public tripassistantServices: TripAssistantService
  ) { }

  ngOnInit() {
  }
}