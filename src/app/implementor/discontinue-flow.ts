import { Injectable } from "@angular/core";
import { Flow } from "./flow";


@Injectable()
export class DiscontinueFlow implements Flow {
    name: string = "Discontinue";
    initialise() {
        console.log(' initalizing offer for ',this.name);
    }
}