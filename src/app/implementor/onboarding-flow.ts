import { Injectable } from "@angular/core";
import { Flow } from "./flow";


@Injectable()
export class OnboardingFlow implements Flow {
    name: string = "Onboarding";
    initialise() {
        console.log(' initalizing offer for ',this.name);
    }
}