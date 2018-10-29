import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Ng2CarouselamosModule } from 'ng2-carouselamos';

import { SwiperModule } from './main-container/results/swiper/swiper.module';
import { SearchboxModule } from './main-container/searchbox/searchbox.module';

import { AppComponent } from './app.component';
import { ResultsComponent } from './main-container/results/results.component';
import { DescriptionComponent } from './description/description.component';
import { MainContainerComponent } from './main-container/main-container.component';
import { SpeechActionCommandComponent } from './main-container/results/speech-action-command/speech-action-command.component';

import { TripAssistantService } from './services/tripassistant.service';
import { SpeechRecogniserService } from './services/speech-recogniser.service';
import { MicComponent } from './main-container/results/mic/mic.component';
import { ChatContainerModule } from './main-container/chat-container/chat-container.module';

@NgModule({
  declarations: [
    AppComponent,
    ResultsComponent,
    DescriptionComponent,
    MainContainerComponent,
    SpeechActionCommandComponent,
    MicComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    Ng2CarouselamosModule,
    HttpClientModule,
    SwiperModule,
    SearchboxModule,
    ChatContainerModule
  ],
  providers: [
    { 
      provide: 'SPEECH_LANG', 
      useValue: 'en-US' 
    },
    TripAssistantService,
    SpeechRecogniserService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }