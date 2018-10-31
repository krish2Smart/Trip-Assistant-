import { 
  Component, 
  OnInit, 
  ViewChild, 
  ElementRef 
} from '@angular/core';

import { SpeechRecogniserService } from 'src/app/services/speech-recogniser.service';

@Component({
  selector: 'app-mic',
  templateUrl: './mic.component.html',
  styleUrls: ['./mic.component.css']
})
export class MicComponent implements OnInit {
  micOn: boolean = false;
  transcripts: string = 'aa';
  @ViewChild('transcriptsResult') transcriptsResultElement: ElementRef;
  @ViewChild('display') displayElement: ElementRef

  constructor(
    private speechRecogniser: SpeechRecogniserService  
  ) { }

  ngOnInit() {
    this.speechRecogniser.transcriptChanged
      .subscribe(
        (transcripts) => {
          console.log(transcripts);
          this.transcriptsResultElement.nativeElement.value = transcripts; 
        }
      )
  }

  toggleMic(): void {
    if(this.micOn)
      this.stopListening();
    else  
      this.startListening();
    this.micOn = !this.micOn;
  }

  startListening(): void {
    this.speechRecogniser.start();
    this.displayElement.nativeElement.style.display = "block";
  }

  stopListening(): void {
    this.speechRecogniser.stop();
    this.displayElement.nativeElement.style.display = "none";
  }

}