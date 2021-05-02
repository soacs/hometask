import { Component, OnInit } from "@angular/core";

import { StateItem, RoomItem, CountryItem, DataService } from "~/app/shared/data.service";

@Component({
    selector: "Create",
    templateUrl: "./create.component.html",
    styleUrls: ["./create.component.css"]
})
export class CreateComponent implements OnInit {
    countries: Array<CountryItem>;
    rooms: Array<RoomItem>;
    states: Array<StateItem>;
    item: string;
    room: string;
    state: string;
    currentYear = 2021;
    currentDay =  12;
    currentMonth: 1;
    mydate = new Date().toDateString();
    taskName = 'Bedroom Closet';
    timeFrame: number;
    serviceNeedText: string;
    switchValue: boolean;

    constructor(private _itemService: DataService) {
    }

    ngOnInit(): void {
        this.countries = this._itemService.getCountryItems(0);
        this.rooms = this._itemService.getRoomItems(0);
        this.states = this._itemService.getStateItems(0);
        this.timeFrame = 0;
        this.serviceNeedText = "Needed Immediately?";
    }

    checkStatus = false;
    switchStat = "not checked";

    onChange() {
        this.checkStatus = !this.checkStatus;
        console.log("checkStatus " + this.checkStatus);
        if (this.checkStatus) {
            this.switchStat = "checked";
        } else {
            this.switchStat = "not checked";
        }
    }

    onSliderValueChange(args) {
        const slider = args.object;
        slider.on("valueChange", (_args) => {
            this.timeFrame = Math.floor(_args.value / 10.0);
            this.serviceNeedText = 'Needed in ' + this.timeFrame + ' weeks!';
            console.log(_args.value);
        })
    }
    setProjecTaskLocation($event){
        const selectedIndex = $event.object.selectedIndex;
        this.taskName = this.rooms[selectedIndex] + '';
    }
}
