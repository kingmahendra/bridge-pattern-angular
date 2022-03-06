import { APP_CONFIG } from "../products/app-config.token"
import { FLOW_TOKEN } from "../products/flow-token"
import { Flow } from "./flow"
import { ModifyFlow } from "./modify-flow"
import { OnboardingFlow } from "./onboarding-flow"

export const flowFactory = (config: string): Flow => {
    return config === 'modify' ? new ModifyFlow() : new OnboardingFlow()
}

export const FLOW_PROVIDER =  {
    provide: FLOW_TOKEN,
    useFactory: flowFactory,
    deps:[APP_CONFIG]
  }