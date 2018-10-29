import { NgModule } from "@angular/core";
import { SpeechRecogniserComponent } from "./speech-recogniser/speech-recogniser.component";
import { SearchboxComponent } from "./searchbox.component";
import { SpeechModule } from "./SpeechRecognition";
import { MatIconModule } from "@angular/material";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

@NgModule({
    declarations: [
        SpeechRecogniserComponent,
        SearchboxComponent
    ],
    imports: [
        CommonModule,
        SpeechModule,
        MatIconModule,
        FormsModule
    ],
    providers: [],
    exports: [
        SearchboxComponent
    ]
})

export class SearchboxModule {}