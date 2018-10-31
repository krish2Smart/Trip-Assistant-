import { NgModule } from "@angular/core";
import { AgmCoreModule } from '@agm/core';
import { MatIconModule, MatCardModule, MatExpansionModule } from "@angular/material";
import { CommonModule } from "@angular/common";
import { Ng2CarouselamosModule } from "ng2-carouselamos";

import { StarRatingComponent } from "./star-rating/star-rating.component";
import { SwiperComponent } from "./swiper.component";
import { SpeechActionComponent } from "./speech-action/speech-action.component";
import { ActivityComponent } from "./activity/activity.component";

@NgModule({
    declarations: [
        StarRatingComponent,
        SwiperComponent,
        SpeechActionComponent,
        ActivityComponent
    ],
    imports: [
        MatCardModule,
        MatIconModule,
        Ng2CarouselamosModule,
        CommonModule,
        MatExpansionModule,
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyA9v-ByUMauD8TazXdViq_f7RF-EHru86A'
        })
    ],
    exports: [
        SwiperComponent
    ]
})

export class SwiperModule { }