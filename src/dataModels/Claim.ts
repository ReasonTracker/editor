import { ItemTypes, Item, newId } from "@reasonscore/core";

export class Claim implements iClaim, Item {
    type: ItemTypes = 'claim'
    labelMin: string = "";
    labelMid: string = "";
    labelMax: string = "";
    priority: string = "";

    constructor(
        public content: string = "",
        public id: string = newId(),
        public reversible: boolean = false,
    ) {
    }
}

export interface iClaim {
    type: ItemTypes,
    id: string,
    reversible: boolean,
    content: string,

    /** allow for other properties by external implementations */
    // [others: string]: any;
}


