import { Component, Inject } from '@angular/core';
import { Flow } from 'src/app/implementor/flow';
import { FLOW_PROVIDER } from 'src/app/implementor/flow-factory';
import { FLOW_TOKEN } from '../../tokens/flow-token';
import { PRODUCT_TYPE } from '../../tokens/product-token';
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
    FLOW_PROVIDER
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
