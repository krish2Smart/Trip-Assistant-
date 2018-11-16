import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { TitleCasePipe } from '@angular/common';
import { Ng2CarouselamosModule } from 'ng2-carouselamos';

import { SwiperModule } from './main-container/results/swiper/swiper.module';
import { SearchboxModule } from './main-container/home/searchbox/searchbox.module';
import { ChatContainerModule } from './main-container/home/chat-container/chat-container.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './main-container/home/home.component';
import { ResultsComponent } from './main-container/results/results.component';
import { MainContainerComponent } from './main-container/main-container.component';
import { SpeechActionCommandComponent } from './main-container/results/speech-action-command/speech-action-command.component';
import { MicComponent } from './main-container/results/mic/mic.component';
import { WeatherComponent } from './main-container/results/weather/weather.component';

import { TripAssistantService } from './services/tripassistant.service';
import { SpeechRecogniserService } from './services/speech-recogniser.service';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    ResultsComponent,
    MainContainerComponent,
    SpeechActionCommandComponent,
    MicComponent,
    HomeComponent,
    WeatherComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    Ng2CarouselamosModule,
    HttpClientModule,
    SwiperModule,
    SearchboxModule,
    ChatContainerModule,
    FormsModule
  ],
  providers: [
    {
      provide: 'SPEECH_LANG',
      useValue: 'en-US' 
    },
    TripAssistantService,
    SpeechRecogniserService,
    TitleCasePipe
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }