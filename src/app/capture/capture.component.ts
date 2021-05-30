
import { Component, OnInit } from "@angular/core";

@Component({
    selector: "capture",
    templateUrl: "./capture.component.html",
    styleUrls: ["./capture.component.scss"]
})
export class CaptureComponent implements OnInit {

    constructor() {
        console.log('ENTER: CaptureComponent constructor');
    }

    // tslint:disable-next-line:no-empty
    ngOnInit(): void {
    }
}
