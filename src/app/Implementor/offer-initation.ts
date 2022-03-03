import { Injectable } from "@angular/core";
import { Initiation } from "./initiation";

@Injectable()
export class OfferInitation implements Initiation {
    initialise() {
        console.log('new offer initalizing....')
    }
}