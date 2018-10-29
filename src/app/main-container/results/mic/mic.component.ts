import { Component, OnInit } from '@angular/core';
import { SpeechRecogniserService } from 'src/app/services/speech-recogniser.service';

@Component({
  selector: 'app-mic',
  templateUrl: './mic.component.html',
  styleUrls: ['./mic.component.css']
})
export class MicComponent implements OnInit {

  constructor(private speechRecogniser: SpeechRecogniserService) { }

  ngOnInit() {
    this.speechRecogniser.start();
  }

}
