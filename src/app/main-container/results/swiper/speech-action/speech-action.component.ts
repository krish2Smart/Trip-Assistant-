import { 
  Component, 
  OnInit, 
  Input, 
  ViewChild, 
  ElementRef 
} from '@angular/core';

import { SpeechRecogniserService } from 'src/app/services/speech-recogniser.service';

@Component({
  selector: 'app-speech-action',
  templateUrl: './speech-action.component.html',
  styleUrls: ['./speech-action.component.css']
})
export class SpeechActionComponent implements OnInit {
  @Input() item: any;
  @ViewChild("itemClick") itemClick: ElementRef;

  constructor(
    private speechRecogniser: SpeechRecogniserService
    
  ) { }

  ngOnInit() {
    this.speechRecogniser.transcriptChanged
      .subscribe(
        (speechCommand: string) => {
          console.log(speechCommand)
          if(this.item.name.toLowerCase() === speechCommand)
            this.itemClick.nativeElement.click();
        }
      )
  }

}