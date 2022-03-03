import { Component, OnInit } from '@angular/core';
import { FlowModify } from 'src/app/implementor/flow-modify';

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
    FlowModify
  ]
})
export class RzbModifyComponent extends ProductType {
  override load(): void {
    console.log(`Loading ${this.type} modify Flow`)
    this.flow.initialise();
  }

  constructor(private flowType: FlowModify) {
    super(flowType)
    this.type="RZB"
   }

}
