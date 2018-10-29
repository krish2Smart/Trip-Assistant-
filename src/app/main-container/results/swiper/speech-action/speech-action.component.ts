import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { SpeechRecogniserService } from 'src/app/services/speech-recogniser.service';

@Component({
  selector: 'app-speech-action',
  templateUrl: './speech-action.component.html',
  styleUrls: ['./speech-action.component.css']
})
export class SpeechActionComponent implements OnInit {
  @Output('changeSelectedItem') speechActionItem =  new EventEmitter<any>();
  @Input() item: any;

  constructor(private speechRecogniser: SpeechRecogniserService) { }

  ngOnInit() {
    this.speechRecogniser.transcriptChanged
      .subscribe(
        (speechCommand: string) => {
          console.log(speechCommand)
          if(this.item.name.toLowerCase() === speechCommand) {
            this.speechActionItem.emit(this.item);
            console.log(this.item);
          }
        }
      )
  }

}