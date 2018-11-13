import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

import { SpeechRecogniserService } from 'src/app/services/speech-recogniser.service';

@Component({
  selector: 'app-speech-recogniser',
  templateUrl: './speech-recogniser.component.html',
  styleUrls: ['./speech-recogniser.component.css']
})
export class SpeechRecogniserComponent implements OnInit {
  micOn: boolean = false;
  @Output('onChangeInput') inputChanged = new EventEmitter<string>();

  constructor(
    private speechRecogniser: SpeechRecogniserService ,
    private micElement: ElementRef 
  ) { }

  ngOnInit() {
    this.speechRecogniser.transcriptChanged
      .subscribe(
        (transcripts) => {
          this.inputChanged.emit(transcripts);
        }
      )
  }
  
  toggleVoiceRecognition(): void {
    if(!this.micOn) {
      this.micElement.nativeElement.querySelector('.mic').style.color = "#FF0000";
      this.speechRecogniser.start();
    }
    else  {
      this.micElement.nativeElement.querySelector('.mic').style.color = "#3E92D2";
      this.speechRecogniser.stop();
    }
    this.micOn = !this.micOn;
  }

}