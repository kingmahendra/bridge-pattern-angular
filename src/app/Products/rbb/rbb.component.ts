import { Component, OnInit } from '@angular/core';
import { Initiation } from 'src/app/Implementor/initiation';
import { RboOfferInitation } from 'src/app/Implementor/offer-initaion-rbo';
import { OfferInitation } from 'src/app/Implementor/offer-initation';
import { Product } from 'src/app/Products/product';
import { PRODUCT_TOKEN } from '../product-token';

@Component({
  selector: 'app-rbb',
  templateUrl: './rbb.component.html',
  styleUrls: ['./rbb.component.css'],
  providers:[
    {
      provide: PRODUCT_TOKEN,
      useExisting:RbbComponent
    },
    RboOfferInitation
  ]
})

export class RbbComponent extends Product {
  override onboard(): void {
    console.log('Onboarding RBB Product')
    this.impl.initialise();
  }

  constructor(private offer: RboOfferInitation) { 
   super(offer)
  }

}
