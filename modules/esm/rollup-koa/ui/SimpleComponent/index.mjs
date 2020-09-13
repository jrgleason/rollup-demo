import {ShadowElement} from "../ShadowElement";
import {CREATE_ELEMENT} from "@jrg-material/core";

export class SimpleComponent extends ShadowElement{
    constructor(mode = 'open'){
        super(null,"<h1>Everything Worked</h1>",mode);
    }
}
CREATE_ELEMENT("jrg-simple", SimpleComponent, {});