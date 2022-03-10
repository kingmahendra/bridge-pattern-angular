import { Component} from '@angular/core';
import { FlowType } from './implementor/flow-factory';
import { APP_CONFIG } from './tokens/app-config.token';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[
    { provide: APP_CONFIG, useValue:FlowType.Onboarding},
  ]
})
export class AppComponent {
  // @ViewChild(PRODUCT_TYPE, {static:true}) productType: ProductType | undefined;
  // flow = '';


  // ngAfterViewChecked(): void {
  //   // this.productType?.load();
  // }
 
}
