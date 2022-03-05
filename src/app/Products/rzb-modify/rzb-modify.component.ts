import { Component, OnInit } from '@angular/core';
import { ModifyFlow } from 'src/app/implementor/modify-flow';

import { PRODUCT_TYPE } from 'src/app/products/product-token';
import { ProductType } from 'src/app/products/product-type';
@Component({
  selector: 'app-rzb-modify',
  templateUrl: './rzb-modify.component.html',
  styleUrls: ['./rzb-modify.component.css'],
  providers: [
    {
      provide: PRODUCT_TYPE,
      useExisting:RzbModifyComponent
    },
    ModifyFlow
  ]
})
export class RzbModifyComponent extends ProductType {
  override load(): void {
    console.log(`%cLoading ${this.type} modify Flow`,'color:green;font-size:20px')
    this.flow.initialise();
  }

  constructor(private flowType: ModifyFlow) {
    super(flowType)
    this.type="RZB"
   }

}
