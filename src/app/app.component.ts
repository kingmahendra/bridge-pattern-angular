import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { OfferInitation } from './Implementor/offer-initation';
import { Product } from './Products/product';
import { PRODUCT_TOKEN } from './Products/product-token';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[
    OfferInitation
  ]
})
export class AppComponent {
  @ViewChild(PRODUCT_TOKEN) product:Product | undefined;
  constructor(){
    
  }
 ngAfterViewInit(): void {
  this.product?.onboard()
   
 }
  title = 'pattern';
}
