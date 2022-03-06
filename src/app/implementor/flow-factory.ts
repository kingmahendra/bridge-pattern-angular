import { APP_CONFIG } from "../products/app-config.token"
import { FLOW_TOKEN } from "../products/flow-token"
import { DiscontinueFlow } from "./discontinue-flow"
import { Flow } from "./flow"
import { ModifyFlow } from "./modify-flow"
import { OnboardingFlow } from "./onboarding-flow"

export const enum FlowType {
    Modify = 'modify',
    Onboarding ='onboarding',
    Discontinue='discontinue'
}

export const flowFactory = (config: string): Flow => {
    switch(config) {
        case FlowType.Onboarding: return new OnboardingFlow();
        case FlowType.Modify: return  new ModifyFlow();
        case FlowType.Discontinue: return new DiscontinueFlow();
        default: return new ModifyFlow()
    }
   // return config === 'modify' ? new ModifyFlow() : new OnboardingFlow()
}

export const FLOW_PROVIDER =  {
    provide: FLOW_TOKEN,
    useFactory: flowFactory,
    deps:[APP_CONFIG]
  }