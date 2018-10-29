import { Component, OnInit } from '@angular/core';
import { TripAssistantService } from './services/tripassistant.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {
  title = 'TripAssistant';

  constructor(private tripassistantServices: TripAssistantService) {
  //   var myDiv = document.getElementsByClassName("")[0];
  //  myDiv.scrollTop = myDiv.scrollHeight;
  }

  ngOnInit() {
    // console.log("rewr"+this.tripassistantServices.getType());
  }
}