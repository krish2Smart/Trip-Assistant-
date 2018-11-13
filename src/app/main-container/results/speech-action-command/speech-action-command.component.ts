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
  @Output('onChangelistenType') changeListenType = new EventEmitter<string>();
  @ViewChild("scroll") MyProp: ElementRef;

  constructor(private speechRecogniser: SpeechRecogniserService) { }

  ngOnInit() {
    this.speechRecogniser.transcriptChanged
      .subscribe(
        (speechCommand) => {
          console.log(speechCommand);
          if(this.command.toLowerCase() === speechCommand) {
            this.MyProp.nativeElement.scrollIntoView({ behavior: "smooth", block: "start" });
            this.MyProp.nativeElement.click();
          }
        }
      )
  }

  onClickListenType(): void {
    this.changeListenType.emit(this.command);
  }

}