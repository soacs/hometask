import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "@nativescript/angular";

import { CreateRoutingModule } from "./create-routing.module";
import { CreateComponent } from "./create.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        CreateRoutingModule
    ],
    declarations: [
        CreateComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class CreateModule { }

