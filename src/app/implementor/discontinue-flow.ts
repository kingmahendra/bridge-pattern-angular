import { Injectable } from "@angular/core";
import { Flow } from "./flow";


@Injectable()
export class DiscontinueFlow implements Flow {
    name: string = "Discontinue";
    initialise() {
        console.log(' %cInitalizing offer for %s','color:blue;font-size:20px',this.name);
    }
}