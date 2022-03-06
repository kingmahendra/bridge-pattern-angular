import { APP_CONFIG } from "../tokens/app-config.token"
import { FLOW_TOKEN } from "../tokens/flow-token"
import { DiscontinueFlow } from "./discontinue-flow"
import { Flow } from "./flow"
import { ModifyFlow } from "./modify-flow"
import { OnboardingFlow } from "./onboarding-flow"

export const enum FlowType {
    Modify = 'modify',
    Onboarding ='onboarding',
    Discontinue='discontinue'
}

const flowMap = new Map<FlowType, Flow>([
    [FlowType.Onboarding, new OnboardingFlow()],
    [FlowType.Modify, new ModifyFlow()],
    [FlowType.Discontinue, new DiscontinueFlow()]
])

const flowFactory = (config: FlowType) => {
    return flowMap.get(config)
}

export const FLOW_PROVIDER =  {
    provide: FLOW_TOKEN,
    useFactory: flowFactory,
    deps:[APP_CONFIG]
  }