import { Flow } from "../implementor/flow";

export abstract class ProductType {
    type: string | undefined = undefined;
    constructor(protected flow:Flow){}
    abstract load():void
}
