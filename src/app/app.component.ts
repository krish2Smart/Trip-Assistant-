import { Component } from '@angular/core';
import { TripAssistantService } from './services/tripassistant.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'TripAssistant';

  constructor(private tripassistantServices: TripAssistantService) { }
}