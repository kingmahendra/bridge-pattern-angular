import { Component, Inject, OnInit } from '@angular/core';
import { Flow } from 'src/app/implementor/flow';
import { FLOW_PROVIDER } from 'src/app/implementor/flow-factory';
import { FLOW_TOKEN } from '../flow-token';
import { PRODUCT_TYPE } from '../product-token';
import { ProductType } from '../product-type';

@Component({
  selector: 'app-rbb',
  templateUrl: './rbb.component.html',
  styleUrls: ['./rbb.component.css'],
  providers:[
    {
      provide: PRODUCT_TYPE,
      useExisting:RbbComponent
    },
    FLOW_PROVIDER
  ]
})
export class RbbComponent extends ProductType {

  override load(): void {
    console.log(`%cLoading ${this.type} product`,'color:green;font-size:20px')
    this.flow.initialise();
  }

  constructor(@Inject(FLOW_TOKEN) private flowType: Flow) {
    super(flowType);
    this.type = 'RBB'
  }

}
