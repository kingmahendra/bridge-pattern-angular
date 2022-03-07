import { Injectable } from "@angular/core";
import { Flow } from "./flow";


@Injectable()
export class ModifyFlow implements Flow {
    name: string = "Modify";
    initialise() {
        console.log('%cInitializing offer for %s ','color:blue;font-size:20px',this.name,);
    }
}