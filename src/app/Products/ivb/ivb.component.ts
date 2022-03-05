import { Component, Inject, OnInit } from '@angular/core';
import { Flow } from 'src/app/implementor/flow';
import { ModifyFlow } from 'src/app/implementor/modify-flow';
import { OnboardingFlow } from 'src/app/implementor/onboarding-flow';
import { APP_CONFIG } from '../app-config.token';
import { FLOW_TOKEN } from '../flow-token';
import { PRODUCT_TYPE } from '../product-token';
import { ProductType } from '../product-type';

@Component({
  selector: 'app-ivb',
  templateUrl: './ivb.component.html',
  styleUrls: ['./ivb.component.css'],
  providers:[
    {
      provide: PRODUCT_TYPE,
      useExisting:IvbComponent
    },
    {
      provide: FLOW_TOKEN,
      useFactory:(config: string) => {
        return config === 'modify' ? new ModifyFlow() : new OnboardingFlow()
      },
      deps:[APP_CONFIG]
    }
  ]
})
export class IvbComponent extends ProductType {
  override load(): void {
    console.log(`%cLoading ${this.type} product`,'color:green;font-size:20px')
    this.flow.initialise();
  }

  constructor(@Inject(FLOW_TOKEN) private flowType: Flow) {
    super(flowType);
    this.type = 'IVB'
  }
}
