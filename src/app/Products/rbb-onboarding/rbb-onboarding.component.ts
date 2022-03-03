import { Component, OnInit } from '@angular/core';
import { FlowOnboarding } from 'src/app/implementor/flow-onboarding';
import { ProductType } from 'src/app/products/product-type';
import { PRODUCT_TYPE } from 'src/app/products/product-token';
@Component({
  selector: 'app-rbb-onboarding',
  templateUrl: './rbb-onboarding.component.html',
  styleUrls: ['./rbb-onboarding.component.css'],
  providers: [
    {
      provide: PRODUCT_TYPE,
      useExisting:RbbOnboardingComponent
    },
    FlowOnboarding
  ]
})
export class RbbOnboardingComponent extends ProductType {
  override load(): void {
    console.log(`Loading ${this.type} onboarding Flow`)
    this.flow.initialise();
  }

  constructor(private flowType: FlowOnboarding) {
    super(flowType)
    this.type="RBB"
   }

  ngOnInit(): void {
  }

}
