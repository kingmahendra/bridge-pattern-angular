import { Component, OnInit } from '@angular/core';
import { Initiation } from 'src/app/Implementor/initiation';
import { OfferInitation } from 'src/app/Implementor/offer-initation';
import { Product } from 'src/app/Products/product';
import { PRODUCT_TOKEN } from '../product-token';
@Component({
  selector: 'app-rzb',
  templateUrl: './rzb.component.html',
  styleUrls: ['./rzb.component.css'],
  providers:[
    {
      provide: PRODUCT_TOKEN,
      useExisting:RzbComponent
    },
    OfferInitation
  ]
})


export class RzbComponent extends Product {
 
  override onboard(): void {
    console.log('onbording RZB product')
    this.impl.initialise();
  }

  constructor( private offer: OfferInitation) {
    super(offer)
   }

}
