import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NativeScriptFormsModule } from "nativescript-angular/forms";

import { FrontComponent } from "./front/front.component";
import { BackComponent } from "./back/back.component";
import { CardComponent } from "./card.component";

@NgModule({
  imports: [
    NativeScriptCommonModule,
    NativeScriptFormsModule
  ],
  declarations: [
    FrontComponent,
    BackComponent,
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
