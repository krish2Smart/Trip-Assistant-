import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Ng2CarouselamosModule } from 'ng2-carouselamos';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { SpeechModule } from './main-container/searchbox/SpeechRecognition';
import { MatButtonModule } from '@angular/material/button';

import { AppComponent } from './app.component';
import { SearchboxComponent } from './main-container/searchbox/searchbox.component';
import { SpeechRecogniserComponent } from './main-container/searchbox/speech-recogniser/speech-recogniser.component';
import { ResultsComponent } from './main-container/results/results.component';
import { SwiperComponent } from './main-container/results/swiper/swiper.component';
import { ActivityComponent } from './main-container/results/swiper/activity/activity.component';
import { DescriptionComponent } from './description/description.component';
import { HeaderComponent } from './header/header.component';
import { MainContainerComponent } from './main-container/main-container.component';
import { ChatContainerComponent } from './main-container/chat-container/chat-container.component';
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { TripAssistantService } from './tripassistant.service';

@NgModule({
  declarations: [
    AppComponent,
    SearchboxComponent,
    SpeechRecogniserComponent,
    ResultsComponent,
    SwiperComponent,
    ActivityComponent,
    DescriptionComponent,
    HeaderComponent,
    MainContainerComponent,
    ChatContainerComponent
  ],
  imports: [
    BrowserModule,
    SpeechModule,
    FormsModule,
    BrowserAnimationsModule,
    MatCardModule,
    Ng2CarouselamosModule,
    HttpClientModule,
    MatIconModule,
    MatToolbarModule,
    MatProgressSpinnerModule,
    MatButtonModule
  ],
  providers: [
    { 
      provide: 'SPEECH_LANG', 
      useValue: 'en-US' 
    },
    TripAssistantService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }