import { Component, OnInit } from '@angular/core';
import { FlowModify } from 'src/app/implementor/flow-modify';
import { ProductType } from 'src/app/products/product-type';
import { PRODUCT_TYPE } from 'src/app/products/product-token';

@Component({
  selector: 'app-rbb-modify',
  templateUrl: './rbb-modify.component.html',
  styleUrls: ['./rbb-modify.component.css'],
  providers: [
    {
      provide: PRODUCT_TYPE,
      useExisting:RbbModifyComponent
    },
    FlowModify
   
  ]
})
export class RbbModifyComponent extends ProductType {

  override load(): void {
    console.log(`Loading ${this.type} modify Flow`)
    this.flow.initialise();
  }

  constructor(private flowType: FlowModify) {
    super(flowType)
    this.type="RBB"
   }

}
