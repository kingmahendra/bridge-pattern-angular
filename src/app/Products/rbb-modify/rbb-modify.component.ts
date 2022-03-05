import { Component, OnInit } from '@angular/core';
import { ModifyFlow } from 'src/app/implementor/modify-flow';
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
    ModifyFlow
   
  ]
})
export class RbbModifyComponent extends ProductType {

  override load(): void {
    console.log(`%cLoading ${this.type} modify Flow`,'color:green;font-size:20px')
    this.flow.initialise();
  }

  constructor(private flowType: ModifyFlow) {
    super(flowType)
    this.type="RBB"
   }

}
