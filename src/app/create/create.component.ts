import { Component, OnInit } from "@angular/core";

import { StateItem, RoomItem, CountryItem, DataService } from "~/app/shared/data.service";

@Component({
    selector: "Create",
    templateUrl: "./create.component.html"
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

    constructor(private _itemService: DataService) {
    }

    ngOnInit(): void {
        this.countries = this._itemService.getCountryItems(0);
        this.rooms = this._itemService.getRoomItems(0);
        this.states = this._itemService.getStateItems(0);
    }

    checkStatus = false;
    switchStat = "not checked";

    onChange(value) {
        console.log("switch " + value);
        if (value) {
            this.switchStat = "checked";
        } else {
            this.switchStat = "not checked";
        }
    }

}
