import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule, NativeScriptFormsModule } from "@nativescript/angular";
import { CreateRoutingModule } from "./capture-routing.module";
import { CaptureComponent } from "./capture.component";

console.log('capture instantiate');

@NgModule({
    imports: [
        NativeScriptCommonModule,
        NativeScriptFormsModule,
        CreateRoutingModule
    ],
    declarations: [
        CaptureComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class CaptureModule { }
