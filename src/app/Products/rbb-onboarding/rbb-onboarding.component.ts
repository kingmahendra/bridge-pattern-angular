import { Component, Inject, OnInit } from '@angular/core';
import { OnboardingFlow } from 'src/app/implementor/onboarding-flow';
import { ProductType } from 'src/app/products/product-type';
import { PRODUCT_TYPE } from 'src/app/products/product-token';
import { Flow } from 'src/app/implementor/flow';
import { FLOW_TOKEN } from '../flow-token';
@Component({
  selector: 'app-rbb-onboarding',
  templateUrl: './rbb-onboarding.component.html',
  styleUrls: ['./rbb-onboarding.component.css'],
  providers: [
    {
      provide: PRODUCT_TYPE,
      useExisting:RbbOnboardingComponent
    },
    {
      provide: FLOW_TOKEN,
      useClass: OnboardingFlow
    }
    // OnboardingFlow
  ]
})
export class RbbOnboardingComponent extends ProductType {
  override load(): void {
    console.log(`Loading ${this.type} onboarding Flow`)
    this.flow.initialise();
  }

  constructor(@Inject(FLOW_TOKEN) private flowType: Flow) {
    super(flowType)
    this.type="RBB"
   }
}
