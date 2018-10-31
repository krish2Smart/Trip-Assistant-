import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { ChatContainerComponent } from "./chat-container.component";

@NgModule({
    declarations: [
        ChatContainerComponent
    ],
    imports: [
        CommonModule,
        FormsModule
    ],
    exports: [
        ChatContainerComponent
    ]
})

export class ChatContainerModule {}