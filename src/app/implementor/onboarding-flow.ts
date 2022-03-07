import { Injectable } from "@angular/core";
import { Flow } from "./flow";


@Injectable()
export class OnboardingFlow implements Flow {
    name: string = "Onboarding";
    initialise() {
        console.log(' %cInitializing offer for %s','color:blue;font-size:20px',this.name);
    }
}