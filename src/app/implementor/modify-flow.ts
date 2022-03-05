import { Injectable } from "@angular/core";
import { Flow } from "./flow";


@Injectable()
export class ModifyFlow implements Flow {
    name: string = "Modify";
    initialise() {
        console.log('%cInitalizing offer for %s ','color:blue;font-size:20px',this.name,);
    }
}