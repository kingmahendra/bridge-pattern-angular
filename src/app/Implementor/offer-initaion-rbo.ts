import { Injectable } from "@angular/core";
import { Initiation } from "./initiation";

@Injectable()
export class RboOfferInitation implements Initiation {
    initialise() {
        console.log('new RBO offer initalizing....')
    }
}