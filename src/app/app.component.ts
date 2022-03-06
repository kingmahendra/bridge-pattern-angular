import { Component, ViewChild } from '@angular/core';
import { APP_CONFIG } from './products/app-config.token';
import { PRODUCT_TYPE } from './products/product-token';
import { ProductType } from './products/product-type';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[
    { provide: APP_CONFIG, useValue:'onboarding' },
  ]
})
export class AppComponent {
  @ViewChild(PRODUCT_TYPE) productType: ProductType | undefined;
  constructor(){
    
  }

 ngAfterViewChecked(): void {
   this.productType?.load();
 }

  flow = '';
}
