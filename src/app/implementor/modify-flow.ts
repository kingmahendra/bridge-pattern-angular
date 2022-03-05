import { Injectable } from "@angular/core";
import { Flow } from "./flow";


@Injectable()
export class ModifyFlow implements Flow {
    name: string = "Modify";
    initialise() {
        console.log(' initalizing offer for ',this.name);
    }
}