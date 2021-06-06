import { Component, OnInit } from "@angular/core";
import * as camera from "@nativescript/camera";
import { Image } from "@nativescript/core";

@Component({
    selector: "capture",
    templateUrl: "capture.component.html",
    styleUrls: ["./capture.component.scss"]
})
export class CaptureComponent implements OnInit {

    constructor() {
        console.log('CaptureComponent constructor');
    }

    ngOnInit() {
        console.log('CaptureComponent ngOnInit');
    }

    captureIt($event) {
        alert('capturing: ');
        console.log('ENTER: CaptureComponent capture()');
        const options = {
            width: 300,
            height: 300,
            keepAspectRatio: false,
            saveToGallery: true
        };
        camera.requestPermissions().then(
            function success() {

                camera.takePicture(options)
                    .then((imageAsset) => {
                        console.log("Size: " + imageAsset.options.width + "x" + imageAsset.options.height);
                        console.log("keepAspectRatio: " + imageAsset.options.keepAspectRatio);
                        console.log("Photo saved in Photos/Gallery for Android or in Camera Roll for iOS");
                    }).catch((err) => {
                    console.log("Error -> " + err.message);
                });
            },
            function failure() {
                console.log("Error -> " + 'Permission denied');
            }
        );
    }
}
