
import { Component, OnInit } from "@angular/core";

import { StateItem, RoomItem, CountryItem, DataService } from "~/app/shared/data.service";
import { Button } from "@nativescript/core/ui/button/index.android";

@Component({
    selector: "Create",
    templateUrl: "./create.component.html",
    styleUrls: ["./create.component.css"]
})
export class CreateComponent implements OnInit {
    countries: Array<CountryItem>;
    rooms: Array<RoomItem>;
    states: Array<StateItem>;
    state: string;
    country = 'United States';
    room: string;
    currentYear = 2021;
    currentDay =  12;
    currentMonth: 1;
    mydate = new Date().toISOString();
    taskLocation = 'Bedroom Closet';
    projectName: string;
    timeFrame: number;
    serviceNeedText: string;
    switchValue: boolean;
    budget: number = 200;
    homeOwnerStatus = false;
    switchStat = "not checked";

    constructor(private _itemService: DataService) {
    }

    ngOnInit(): void {
        this.countries = this._itemService.getCountryItems(0);
        this.rooms = this._itemService.getRoomItems(0);
        this.states = this._itemService.getStateItems(0);
        this.timeFrame = 0;
        this.serviceNeedText = "Needed Immediately?";
    }

    onChange() {
        this.homeOwnerStatus = !this.homeOwnerStatus;
        console.log("checkStatus " + this.homeOwnerStatus);
        if (this.homeOwnerStatus) {
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

    onBudgetChange(args) {
        const slider = args.object;
        slider.on("valueChange", (_args) => {
            this.budget = Math.floor(_args.value * 200);
            console.log(_args.value);
        })
    }

    setProjecTaskLocation($event) {
        const selectedIndex = $event.object.selectedIndex;
        this.taskLocation = this.rooms[selectedIndex] + '';
        this.projectName = this.taskLocation + '-' + this.mydate;
    }

    onButtonTap($event): void {
        console.log($event.object.toString());
        const button = <Button>$event.object;

        console.log('projectName: ' + this.projectName);
        console.log('state: ' + this.states[this.state]);
        console.log('country: ' + this.country);
        console.log('Date: ' + this.mydate);
        console.log('taskLocation: ' + this.taskLocation);
        console.log('timeFrame (weeks): ' + this.timeFrame);
        console.log('serviceNeedText: ' + this.serviceNeedText);
        console.log('homeOwnerStatus: ' + this.homeOwnerStatus);
        console.log('budget: $ ' + this.budget);


    }
}
