import { Component, Input } from '@angular/core';

import { ChatsService } from '../../../services/chats.service';
import { TripAssistantService } from '../../../services/tripassistant.service';

@Component({
  selector: 'app-chat-container',
  templateUrl: './chat-container.component.html',
  styleUrls: ['./chat-container.component.css'],
  providers:[]
})
export class ChatContainerComponent {

  @Input() chats: {
    sender: string,
    message: string
  }[];

  constructor(
    public chatsService: ChatsService, 
    public tripassistantService: TripAssistantService
  ) { }

}