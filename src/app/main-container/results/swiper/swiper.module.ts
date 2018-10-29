import { NgModule } from "@angular/core";

import { StarRatingComponent } from "./star-rating/star-rating.component";
import { SwiperComponent } from "./swiper.component";
import { MatIconModule, MatCardModule } from "@angular/material";
import { CommonModule } from "@angular/common";
import { Ng2CarouselamosModule } from "ng2-carouselamos";
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
        CommonModule
    ],
    exports: [
        SwiperComponent,
        StarRatingComponent
    ]
})

export class SwiperModule { }