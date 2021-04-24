import { Injectable } from "@angular/core";

export interface DataItem {
    id: number;
    name: string;
    description: string;
}

export interface RoomItem {
    id: number;
    name: string;
    toString(): string;
}

export interface CountryItem {
    id: number;
    name: string;
    toString(): string;
}
export interface StateItem {
    id: number;
    name: string;
    toString(): string;
}

@Injectable({
    providedIn: "root"
})
export class DataService {

    private items = new Array<DataItem>(
        {
            id: 1,
            name: "Item 1",
            description: "Description for Item 1"
        },
        {
            id: 2,
            name: "Item 2",
            description: "Description for Item 2"
        },
        {
            id: 3,
            name: "Item 3",
            description: "Description for Item 3"
        },
        {
            id: 4,
            name: "Item 4",
            description: "Description for Item 4"
        },
        {
            id: 5,
            name: "Item 5",
            description: "Description for Item 5"
        },
        {
            id: 6,
            name: "Item 6",
            description: "Description for Item 6"
        },
        {
            id: 7,
            name: "Item 7",
            description: "Description for Item 7"
        },
        {
            id: 8,
            name: "Item 8",
            description: "Description for Item 8"
        },
        {
            id: 9,
            name: "Item 9",
            description: "Description for Item 9"
        },
        {
            id: 10,
            name: "Item 10",
            description: "Description for Item 10"
        }
    );

    getItems(): Array<DataItem> {
        return this.items;
    }

    getItem(id: number): DataItem {
        return this.items.filter((item) => item.id === id)[0];
    }

    getCountryItems(id: number): Array<CountryItem> {
        return this.countries;
    }
    getCountryItem(id: number): Array<CountryItem> {
        return this.countries.filter((item) => item.id === id);
    }


    getStateItems(id: number): Array<StateItem> {
        return this.states;
    }
    getStateItem(id: number): Array<StateItem> {
        return this.states.filter((item) => item.id === id);
    }
    getRoomItems(id: number): Array<RoomItem> {
        return this.rooms;
    }
    getRoomItem(id: number): Array<RoomItem> {
        return this.countries.filter((item) => item.id === id);
    }

    private countries: Array<CountryItem> = [
        {
            id: 0,
            name: 'United States',
            toString: () => {
                return 'United States';
            }
        },
        {
            id: 1,
            name: 'Denmark',
            toString: () => {
                return 'Denmark';
            }
        },
        {
            id: 2,
            name: 'Norway',
            toString: () => {
                return 'Norway';
            }
        },
        {
            id: 3,
            name: 'Finland',
            toString: () => {
                return 'Finland';
            }
        }
    ];

    private states: Array<StateItem> = [
        {
            id: 0,
            name: 'Connecticut',
            toString: () => {
                return 'Connecticut';
            }
        },
        {
            id: 1,
            name: 'New York',
            toString: () => {
                return 'New York';
            }
        },
        {
            id: 2,
            name: 'New Jersey',
            toString: () => {
                return 'New Jersey';
            }
        }
    ];

    private rooms: Array<RoomItem> = [
        {
            id: 0,
            name: 'Bathroom',
            toString: () => {
                return 'Bathroom';
            }
        },
        {
            id: 1,
            name: 'Living Room',
            toString: () => {
                return 'Living Room';
            }
        },
        {
            id: 2,
            name: 'Kitchen',
            toString: () => {
                return 'Kitchen';
            }
        },
        {
            id: 3,
            name: 'Driveway',
            toString: () => {
                return 'Driveway';
            }
        }
    ];
}
