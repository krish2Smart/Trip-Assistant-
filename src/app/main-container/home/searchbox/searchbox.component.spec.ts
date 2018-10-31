import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchboxComponent } from './searchbox.component';
import { ChatsService } from '../chats.services';
import { TripAssistantService } from '../../services/tripassistant.service';
import { HttpClient } from '@angular/common/http';

describe('SearchboxComponent', () => {
  let component: SearchboxComponent;
  let fixture: ComponentFixture<SearchboxComponent>;
  let chatsService: ChatsService;
  let tripassistantService: TripAssistantService;
  let httpService: HttpClient;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchboxComponent);
    chatsService = new ChatsService();
    tripassistantService = new TripAssistantService();
    // httpService = new HttpClient();
    // component = new SearchboxComponent();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
