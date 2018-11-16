import { 
  Component, 
  OnInit, 
  Input, 
  Output, 
  EventEmitter, 
  ViewChild, 
  ElementRef 
} from '@angular/core';

import { SpeechRecogniserService } from 'src/app/services/speech-recogniser.service';

@Component({
  selector: 'app-speech-action-command',
  templateUrl: './speech-action-command.component.html',
  styleUrls: ['./speech-action-command.component.css']
})
export class SpeechActionCommandComponent implements OnInit {
  @Input('type') command: string;

  constructor(
    private speechRecogniser: SpeechRecogniserService,
    private speechActionCommandElement: ElementRef
  ) { }

  ngOnInit() {
    this.speechRecogniser.transcriptChanged
      .subscribe(
        (speechCommand) => {
          console.log(speechCommand);
          if(this.command.toLowerCase() === speechCommand) {
            this.speechActionCommandElement.nativeElement.scrollIntoView({ behavior: "smooth", block: "start" });
            this.speechActionCommandElement.nativeElement.click();
          }
        }
      )
  }

}