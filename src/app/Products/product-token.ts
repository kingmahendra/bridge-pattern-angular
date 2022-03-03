import { InjectionToken } from "@angular/core";
import { Product } from "./product";

export const PRODUCT_TOKEN = new InjectionToken<Product>("product");