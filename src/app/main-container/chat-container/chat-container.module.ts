import { NgModule } from "@angular/core";
import { ChatContainerComponent } from "./chat-container.component";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

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