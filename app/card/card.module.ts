import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NativeScriptFormsModule } from "nativescript-angular/forms";

import { CardComponent } from "./card.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        NativeScriptFormsModule
    ],
    declarations: [
        CardComponent
    ],
    exports: [
      CardComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class CardModule { }
