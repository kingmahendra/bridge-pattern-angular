import { Component, Inject, OnInit } from '@angular/core';
import { Flow } from 'src/app/implementor/flow';
import { FLOW_PROVIDER } from 'src/app/implementor/flow-factory';
import { FLOW_TOKEN } from 'src/app/tokens/flow-token';
import { PRODUCT_TYPE } from 'src/app/tokens/product-token';
import { ProductType } from '../../product-type';

@Component({
  selector: 'app-welcome',
  providers: [
    {
      provide: PRODUCT_TYPE,
      useExisting: RbbComponent,
    },
    FLOW_PROVIDER,
  ],
  template: `
    <div class="content">
      <h1>RBB Feature</h1>
      <h2>Initialized with {{ flowType.name }} flow</h2>
    </div>
  `,
  styles: [`
    .content {
      width: 50%;
      margin: auto;
      padding: 40px;
      background-color:aqua;
      text-align: center;
  }
   `
  ],
})
export class RbbComponent extends ProductType {
  override load(): void {
    console.log(`%cLoading ${this.type} product`, 'color:green;font-size:20px');
    this.flow.initialise();
  }
  ngOnInit(): void {

    this.load();
  }

  constructor(@Inject(FLOW_TOKEN) public flowType: Flow) {
    super(flowType);
    this.type = 'RBB';
  }
}
