import { NgModule } from "@angular/core";
import { MatIconModule } from "@angular/material";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { SpeechRecogniserComponent } from "./speech-recogniser/speech-recogniser.component";
import { SearchboxComponent } from "./searchbox.component";

@NgModule({
    declarations: [
        SpeechRecogniserComponent,
        SearchboxComponent
    ],
    imports: [
        CommonModule,
        MatIconModule,
        FormsModule
    ],
    providers: [],
    exports: [
        SearchboxComponent
    ]
})

export class SearchboxModule {}