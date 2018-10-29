import { Injectable, Inject } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SpeechRecogniserService {
  transcriptChanged = new EventEmitter<string>();
  private recognition: any;
  private transcript: string;
  isSpeechRecognitionAvailable: boolean;

  constructor(@Inject('SPEECH_LANG') public lang: string) { 
    this.isSpeechRecognitionAvailable = window['SpeechRecognition'] !== undefined || window['webkitSpeechRecognition'] !== undefined;
    if(this.isSpeechRecognitionAvailable) {
      const SpeechRecognition = window['SpeechRecognition'] || window['webkitSpeechRecognition'];
      this.recognition = new SpeechRecognition();
      this.recognition.lang = lang;
      this.recognition.interimResults = false;
      this.recognition.maxAlternatives = 1;
      this.recognition.continuous = true;

      this.recognition.onresult = event => {
        if (event.results) {
          this.transcript = event.results[event.resultIndex][0].transcript.trim().toLowerCase();
          this.transcriptChanged.emit(this.transcript);
        }
      }
    }
  }

  start() {
    this.recognition.start();
  }

  stop() {
    this.recognition.stop();
  }

  getTranscript() {
    return this.transcript;
  }
}
