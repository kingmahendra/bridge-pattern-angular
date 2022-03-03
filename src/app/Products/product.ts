import { Injectable } from "@angular/core";
import { Initiation } from "../Implementor/initiation";


export abstract class Product {
   
    constructor(protected impl:Initiation){}
    abstract onboard():void
}

// export interface Product {
//     impl: Initiation;
//     onboard:() => void;
// }