import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatContainerComponent } from './chat-container.component';
import { ChatsService } from '../chats.services';
import { TripAssistantService } from '../../services/tripassistant.service';

describe('ChatContainerComponent', () => {
  let component: ChatContainerComponent;
  let fixture: ComponentFixture<ChatContainerComponent>;
  let chatsService:ChatsService;
  let tripassistantService:TripAssistantService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatContainerComponent);
    chatsService=new ChatsService();
    component = new ChatContainerComponent(chatsService,tripassistantService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
