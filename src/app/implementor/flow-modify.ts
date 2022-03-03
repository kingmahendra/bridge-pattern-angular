import { Injectable } from "@angular/core";
import { Flow } from "./flow";


@Injectable()
export class FlowModify implements Flow {
    name: string = "Modify";
    initialise() {
        console.log(' initalizing offer for ',this.name);
    }
}