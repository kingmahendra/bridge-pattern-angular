import { InjectionToken } from "@angular/core";
import { Flow } from "../implementor/flow";

export const FLOW_TOKEN = new InjectionToken<Flow>('flow');